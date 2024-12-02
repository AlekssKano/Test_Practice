//1
// let arr =['a','b','c','d','e'];
// let res = arr.slice(0,3)
// console.log(arr )
// console.log(res)
//2
// let arr2 =['a','b','c','d','e'];
// let res =arr2.slice(2)
// console.log(res)
// 3
// let arr3 =['a','b','c','d','e'];
// let res =arr3.slice(1, -1)
// console.log(res)
//4
// let arr4 =['a','b','c','d','e'];
// let res =arr4.slice()
// console.log(arr4)
// console.log(res)
//splice
//1
// let inititalArr =['a','b','c','d','e'];
// let res = inititalArr.splice(1, 3) // удаляем с 1 по 3 элемент
// console.log(inititalArr);
// console.log(res);
//2
// let inititalArr2 =['a','b','c','d','e'];
// let result2 = inititalArr2.splice(1, 0, ['value1'], ['value2'])
// console.log(inititalArr2);
// console.log(result2);
//3
// let inititalArr3 =['a','b','c','d','e'];
// let result3 = inititalArr3.splice(1, 2, ['test1'], ['test2'])
// console.log(inititalArr3);
// console.log(result3);
// 4 toSpliced() immutable splices version
// let inititalArr3 =['a','b','c','d','e'];
// let result3 = inititalArr3.toSpliced(1, 2, ['test1'], ['test2'])
// console.log(inititalArr3);
// console.log(result3);
//reduce
//arr.reduce((acc, el, index)=>{}) если не передавать
// через запятую началаьное значение асс, то оно всегда будет асс[0]
//arr.reduce((acc,el,index)=>{}, 0)

//initialArr.reduce - коробка с конфетами
//acc пустая коробка, то есть 0 конфет
//el - initialArr[i] будем каждый раз получтать новую конфету на каждом цикле итерации

//for:
//
// let a =[1,2,3,4,5]; //исходный массив
// let sum =0 //acc -аккумулятор, стартовое значение которого будет увеличиваться
//
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]; //a[i]- это наш элемент в reduce
// }
// console.log(sum);

//complete task using reduce

// let arr =[1,2,3,4, 5]; //исходный массив
// let result = arr.reduce((acc,currentValue) => acc+currentValue, 0)
// console.log(result)

//task1
// const fruits =[
//     {name:'apple', quantity:2},
//     {name:'banana', quantity:3},
//     {name:'orange', quantity:1}
// ]
// //how much fruits in warehouse?
// const result = fruits.reduce((acc, currentFruit)=>{
//     console.log('acc', acc)
//     console.log('currentFruits',currentFruit)
//     return acc + currentFruit.quantity;
// }, 0)
// console.log('result', result)
//task 2
// const numbers = [1, 5, 10, 25, 45, 100, 25];
//
// const maxNumber = numbers.reduce((acc, CurrentNumber) => {
//     console.log('acc', acc)
//     console.log('CurrentNumber', CurrentNumber);
//     return CurrentNumber > acc? CurrentNumber : acc;
//
// });
// console.log(maxNumber);
//task 3
// const peoples = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 22},
// ]; //expected result{totalNames;[], totalAges:0
//
// const result = peoples.reduce((acc, currentPeople) =>
//     {
//         console.log('acc', acc)
//         console.log('currentPeople', currentPeople)
//
//         acc.totalNames.push(currentPeople.name);
//         acc.totalAges += currentPeople.age
//         return acc
//     }
//     , {totalNames: [], totalAges: 0})
//
// console.log(result)
//task 4
// const peoples =[
//     {name: 'Vika', age: 25, budget:4500},
//     {name: 'Nikita', age: 45, budget:35000},
//     {name: 'Igor', age: 55, budget:340},
//     {name: 'Insaf', age: 65, budget:50000},
//     {name: 'Alyona', age: 75, budget:20}
// ] //expected result sum of anount budget in number
//
// const result = peoples.reduce((acc, currentPeople) => {
//     console.log('acc',acc)
//     console.log('currentPeople', currentPeople)
//     acc += currentPeople.budget
//     return acc
// }, 0)
// console.log(result)
//task 5
// const numbers = [1, 5, 10, 25, 45, 100, 25];
//
// const result = numbers.reduce((acc, currentNumber) => {
//     console.log('currentNumber ',currentNumber);
//     console.log('acc ', acc);
//     return currentNumber > acc? acc : currentNumber
// });
// console.log(result);

// task 6
// const words = ['Hello', ' ', 'World', '!'] //expected string "Hello World!"
// const result = words.reduce((acc, word) => {
//     console.log('acc ', acc)
//     console.log('word ', word)
//     return acc+word
//
// }, "")
// console.log(result)
//task 7
// const peoples =[
//     {name: 'Vika', age: 25, budget:4500},
//     {name: 'Nikita', age: 45, budget:35000},
//     {name: 'Igor', age: 55, budget:340},
//     {name: 'Insaf', age: 65, budget:50000},
//     {name: 'Alyona', age: 75, budget:20}
// ] //expected result array of names
// const result = peoples.reduce((acc, currentPeople) => {
//     console.log('acc',acc)
//     console.log('currentPeople ',currentPeople)
//     acc.push(currentPeople.name)
//     return acc
// },[])
// console.log('result ',result)
