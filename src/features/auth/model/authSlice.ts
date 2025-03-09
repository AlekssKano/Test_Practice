import { buildCreateSlice, createSlice } from "@reduxjs/toolkit"
import { ResultCode } from "common/enums"
import { handleServerAppError, handleServerNetworkError } from "common/utils"
import { Dispatch } from "redux"
import { setAppStatus } from "../../../app/appSlice"
import { clearTasks } from "../../todolists/model/tasksSlice"
import { clearTodolists } from "../../todolists/model/todolistsSlice"
import { authApi } from "../api/authAPI"
import { LoginArgs } from "../api/authAPI.types"
import { asyncThunkCreator } from "@reduxjs/toolkit"
const createSliceWithThunks = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })

export const authSlice = createSliceWithThunks({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isInitialized: false,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{ rejectValue: null }>()


    return {
      initializeApp: createAThunk(
        async (_, { dispatch, rejectWithValue }) => {
          try {
            dispatch(setAppStatus({ status: "loading" }))
            const res = await authApi.me()
            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
              return { isLoggedIn: true }
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
            state.isLoggedIn = action.payload.isLoggedIn
          },
          settled: (state) => {
            state.isInitialized = true
          },
        },
      ),
      logInThunk: createAThunk(
        async (data: LoginArgs, { dispatch, rejectWithValue }) => {
          try {
            dispatch(setAppStatus({ status: "loading" }))
            const res = await authApi.login(data)
            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
               localStorage.setItem("sn-token", res.data.data.token)
              return { isLoggedIn:true }
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
            state.isLoggedIn = action.payload.isLoggedIn
          },
          settled: (state) => {
            state.isInitialized = true
          },
        },
      ),
      logoutThunk: createAThunk(
        async (_arg, { dispatch, rejectWithValue }) => {
          try {
            dispatch(setAppStatus({ status: "loading" }))
            const res = await authApi.logout()
            if (res.data.resultCode === ResultCode.Success) {
              dispatch(setAppStatus({ status: "succeeded" }))
              return { isLoggedIn:false }
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
            state.isLoggedIn = action.payload.isLoggedIn
          },
          settled: (state) => {
            state.isInitialized = true
          },
        },
      ),
    };
  },
  selectors: {
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsInitialized: (state) => state.isInitialized,
  },

})

// export const loginTC = (data: LoginArgs) => (dispatch: Dispatch) => {
//   dispatch(setAppStatus({ status: "loading" }))
//   authApi
//     .login(data)
//     .then((res) => {
//       if (res.data.resultCode === ResultCode.Success) {
//         dispatch(setAppStatus({ status: "succeeded" }))
//         dispatch(setIsLoggedIn({ isLoggedIn: true }))
//         localStorage.setItem("sn-token", res.data.data.token)
//       } else {
//         handleServerAppError(res.data, dispatch)
//       }
//     })
//     .catch((error) => {
//       handleServerNetworkError(error, dispatch)
//     })
// }

// export const logoutTC = () => (dispatch: Dispatch) => {
//   dispatch(setAppStatus({ status: "loading" }))
//   authApi
//     .logout()
//     .then((res) => {
//       if (res.data.resultCode === ResultCode.Success) {
//         dispatch(setAppStatus({ status: "succeeded" }))
//         dispatch(setIsLoggedIn({ isLoggedIn: false }))
//         dispatch(clearTasks())
//         dispatch(clearTodolists())
//         localStorage.removeItem("sn-token")
//       } else {
//         handleServerAppError(res.data, dispatch)
//       }
//     })
//     .catch((error) => {
//       handleServerNetworkError(error, dispatch)
//     })
// }

// export const initializeAppTC = () => (dispatch: Dispatch) => {
//   dispatch(setAppStatus({ status: "loading" }))
//   authApi
//     .me()
//     .then((res) => {
//       if (res.data.resultCode === ResultCode.Success) {
//         dispatch(setAppStatus({ status: "succeeded" }))
//         dispatch(setIsLoggedIn({ isLoggedIn: true }))
//       } else {
//         handleServerAppError(res.data, dispatch)
//       }
//     })
//     .catch((error) => {
//       handleServerNetworkError(error, dispatch)
//     })
//     .finally(() => {
//       dispatch(setIsInitialized({ isInitialized: true }))
//     })
// }

export const { logInThunk,initializeApp,logoutThunk  } = authSlice.actions
export const { selectIsLoggedIn, selectIsInitialized} = authSlice.selectors
export const authReducer = authSlice.reducer
