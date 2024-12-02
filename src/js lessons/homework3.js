// task1
// let str = 'Hello, world!';
// let startIndex = 7;
//
//  const getSubStr=(str, index)=>{
// return str = str.slice(index)
// }
//
// console.log(getSubStr(str, startIndex)); // Выведет: "world!"
// task2
// const getLastElements=(a, b)=>{
//  return a= a.slice(-b)
// }
//
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]
// task3
// const extractPath=(str, index)=>{
//  return str.slice(index);
// }
//
// console.log(extractPath('http://example.com/blog/article', 18)); // Выведет: "/blog/article"
// task3

// let numbers = [1, 2, 3, 4, 5];
//
// const removeElement=(arr, index)=>{
//  arr.splice(index, 1)
//  return arr
//
// }
//
// console.log(removeElement(numbers, 2));
//task4

//
// let numbers1 = [1, 2, 4, 5];
//  function insertElement(arr, index, el){
//   arr.splice(index,0,el)
//   return arr
// }
// console.log(insertElement(numbers1, 2, 3)); // Выведет: [1, 2, 3, 4, 5]
//task 5
// function sumArray(number){
// let sum = 0;
// sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0 )
//  return sum;
// }
//
//
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Выведет: 15

//task 5
// function sumStringLengths(str) {
//  let result = 0;
//  result = str.reduce((acc, currentValue) => acc + currentValue.length, 0);
//  return result;
// }
// console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17
//task 6

function sumNestedArrays(arr){
 let result=0
   result = arr.reduce((total, currentValue)=> {
    return total+currentValue.reduce((acc, num)=> acc + num,0);
   })

}
console.log(
    sumNestedArrays([
     [1, 2],
     [3, 4, 5],
     [6, 7, 8, 9],
    ])
); // Выведет: 45
