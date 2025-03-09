import { asyncThunkCreator, buildCreateSlice, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ResultCode } from "common/enums"
import { createAppAsyncThunk, handleServerAppError, handleServerNetworkError } from "common/utils"
import { Dispatch } from "redux"
import { setAppError, setAppStatus } from "../../../app/appSlice"
import { AppDispatch, RootState } from "../../../app/store"
import { tasksApi } from "../api/tasksApi"
import { DomainTask, UpdateTaskDomainModel, UpdateTaskModel } from "../api/tasksApi.types"
import { addTodolistThunk, removeTodolistThunk } from "./todolistsSlice"

export type TasksStateType = {
  [key: string]: DomainTask[]
}

const createSliceWithThunks = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

export const tasksSlice = createSliceWithThunks({
  name: "tasks",
  initialState: {} as TasksStateType,
  reducers: (create) => {

    const createAThunk = create.asyncThunk.withTypes<{ rejectValue: null }>()

    return {

      // removeTask: create.reducer<{ taskId: string; todolistId: string }>((state, action) => {
      //   const tasks = state[action.payload.todolistId]
      //   const index = tasks.findIndex((t) => t.id === action.payload.taskId)
      //   if (index !== -1) {
      //     tasks.splice(index, 1)
      //   }
      // }),
      // addTask: create.reducer<{ task: DomainTask }>((state, action) => {
      //   const tasks = state[action.payload.task.todoListId]
      //   tasks.unshift(action.payload.task)
      // }),
      // updateTask: create.reducer<{ taskId: string; todolistId: string; domainModel: UpdateTaskDomainModel }>(
      //   (state, action) => {
      //     const tasks = state[action.payload.todolistId]
      //     const index = tasks.findIndex((t) => t.id === action.payload.taskId)
      //     if (index !== -1) {
      //       tasks[index] = { ...tasks[index], ...action.payload.domainModel }
      //     }
      //   }
      // ),
      clearTasks: create.reducer(() => {
        return {}
      }),
      fetchTasks: createAThunk(async (todolistId: string, thunkAPI) => {
          const { dispatch, rejectWithValue } = thunkAPI
          try {
            dispatch(setAppStatus({ status: "loading" }))
            const res = await tasksApi.getTasks(todolistId)
            dispatch(setAppStatus({ status: "succeeded" }))
//  dispatch(setTasks({ todolistId, tasks: res.data.items }))
            return { todolistId, tasks: res.data.items }
          } catch (e) {
            handleServerNetworkError(e, dispatch)

            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state[action.payload.todolistId] = action.payload.tasks

          }
        }
      ),
      removeTasksThunk: createAThunk(
        async (arg: { taskId: string; todolistId: string }, thunkAPI) => {
          const { dispatch, rejectWithValue } = thunkAPI
          try {
            dispatch(setAppStatus({ status: "loading" }))

            const res = await tasksApi.deleteTask(arg)

            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
              return arg //
            } else {
              handleServerAppError(res.data, dispatch)
              return rejectWithValue(null)
            }
          } catch (e) {
            handleServerNetworkError(e, dispatch)
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {

            const { todolistId, taskId } = action.payload
            const tasks = state[todolistId]

            if (tasks) {
              const index = tasks.findIndex((t) => t.id === taskId)
              if (index !== -1) {
                tasks.splice(index, 1)
              }
            }
          }
        }
      ),
      updateTaskThunk: createAThunk(
        async (
          arg: { taskId: string; todolistId: string; domainModel: UpdateTaskDomainModel },
          { dispatch, rejectWithValue, getState },
        ) => {
          try {
            const { taskId, todolistId, domainModel } = arg

            const allTasksFromState = (getState() as RootState).tasks
            const tasksForCurrentTodolist = allTasksFromState[todolistId]
            const task = tasksForCurrentTodolist.find((t) => t.id === taskId)

            if (!task) {
              dispatch(setAppError({ error: "Task not found" }))
              return rejectWithValue(null)
            }

            const model: UpdateTaskModel = {
              status: task.status,
              title: task.title,
              deadline: task.deadline,
              description: task.description,
              priority: task.priority,
              startDate: task.startDate,
              ...domainModel,
            }

            dispatch(setAppStatus({ status: "loading" }))

            const res = await tasksApi.updateTask({ taskId, todolistId, model })

            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
              return arg
            } else {
              handleServerAppError(res.data, dispatch)
              return rejectWithValue(null)
            }
          } catch (error) {
            handleServerNetworkError(error, dispatch)
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex((t) => t.id === action.payload.taskId)
            if (index !== -1) {
              tasks[index] = { ...tasks[index], ...action.payload.domainModel }
            }
          },
        },
      ),
      addTaskThunk: createAThunk(
        async (arg: { title: string; todolistId: string }, thunkAPI) => {
          const { dispatch, rejectWithValue } = thunkAPI
          try {
            dispatch(setAppStatus({ status: "loading" }))
            const res = await tasksApi.createTask(arg)
            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
              return  { task: res.data.data.item }
            } else {
              handleServerAppError(res.data, dispatch)
              return rejectWithValue(null)
            }

          } catch (e) {
            handleServerNetworkError(e, dispatch)
            return rejectWithValue(null)
          }
        },
        {fulfilled:(state,action)=>{
            const tasks = state[action.payload.task.todoListId]
            tasks.unshift(action.payload.task)
          }}
      ),
    } // <-- Закрываем объект reducers правильно
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodolistThunk.fulfilled, (state, action) => {
        state[action.payload.todolist.id] = []
      })
      .addCase(removeTodolistThunk.fulfilled, (state, action) => {
        delete state[action.payload.id]
      })


  },
  selectors: {
    selectTasks: (state) => state
  }
})

// Thunks
// export const fetchTasks = createAppAsyncThunk<{   todolistId: string,  tasks: DomainTask[]}, string>(`${tasksSlice.name}/fetchTasks`,async (todolistId:string, thunkAPI)=>{
//   const { dispatch,rejectWithValue }=thunkAPI
// try{
//   dispatch(setAppStatus({ status: "loading" }))
//   const res = await tasksApi.getTasks(todolistId)
//   dispatch(setAppStatus({ status: "succeeded" }))
// //  dispatch(setTasks({ todolistId, tasks: res.data.items }))
//   return { todolistId, tasks: res.data.items }
// }
// catch (e){
//     handleServerNetworkError(e,dispatch)
//   return rejectWithValue(null)
// }
//
// })

// export const removeTaskTC = (arg: { taskId: string; todolistId: string }) => (dispatch: Dispatch) => {
//   dispatch(setAppStatus({ status: "loading" }))
//   tasksApi
//     .deleteTask(arg)
//     .then((res) => {
//       if (res.data.resultCode === ResultCode.Success) {
//         dispatch(setAppStatus({ status: "succeeded" }))
//         dispatch(removeTask(arg))
//       } else {
//         handleServerAppError(res.data, dispatch)
//       }
//     })
//     .catch((error) => {
//       handleServerNetworkError(error, dispatch)
//     })
// }

// export const addTaskTC = (arg: { title: string; todolistId: string }) => (dispatch: Dispatch) => {
//   dispatch(setAppStatus({ status: "loading" }))
//   tasksApi
//     .createTask(arg)
//     .then((res) => {
//       if (res.data.resultCode === ResultCode.Success) {
//         dispatch(setAppStatus({ status: "succeeded" }))
//         dispatch(addTask({ task: res.data.data.item }))
//       } else {
//         handleServerAppError(res.data, dispatch)
//       }
//     })
//     .catch((error) => {
//       handleServerNetworkError(error, dispatch)
//     })
// }
//
// export const updateTaskTC =
//   (arg: { taskId: string; todolistId: string; domainModel: UpdateTaskDomainModel }) =>
//     (dispatch: Dispatch, getState: () => RootState) => {
//       const { taskId, todolistId, domainModel } = arg
//
//       const allTasksFromState = getState().tasks
//       const tasksForCurrentTodolist = allTasksFromState[todolistId]
//       const task = tasksForCurrentTodolist.find((t) => t.id === taskId)
//
//       if (task) {
//         const model: UpdateTaskModel = {
//           status: task.status,
//           title: task.title,
//           deadline: task.deadline,
//           description: task.description,
//           priority: task.priority,
//           startDate: task.startDate,
//           ...domainModel
//         }
//
//         dispatch(setAppStatus({ status: "loading" }))
//         tasksApi
//           .updateTask({ taskId, todolistId, model })
//           .then((res) => {
//             if (res.data.resultCode === ResultCode.Success) {
//               dispatch(setAppStatus({ status: "succeeded" }))
//               dispatch(updateTask(arg))
//             } else {
//               handleServerAppError(res.data, dispatch)
//             }
//           })
//           .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//           })
//       }
//     }

export const { addTaskThunk,removeTasksThunk, fetchTasks, clearTasks, updateTaskThunk } = tasksSlice.actions
export const { selectTasks } = tasksSlice.selectors
export const tasksReducer = tasksSlice.reducer
