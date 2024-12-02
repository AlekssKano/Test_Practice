// task 1 Done
// let fruits = ['apple', 'banana', 'orange'] //add new elements
//
// fruits.push('mango', 'kiwi')
// console.log(fruits)
//task 2 Done

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ]; //delete las el and return it
//
// let result = users.pop()
// console.log('users ', users)
// console.log('result',result)

//task 3 Done
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ]; //delete first  user and return it
//
// const firstUser = users.shift()
// console.log('firstUser', firstUser)
// console.log('users', users)


//task 4 Done
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ]; //add one or more elements to the beginning of the array
// users.unshift({id: 5, name: 'Lola', isStudent: false},{id: 6, name: 'Naila', isStudent: true});
// console.log(users);
//task 5 Done
// const str = 'JavaScript is awesome'; // reverse this string
// const res=str.split(' ',3).reverse().join(' ');
// console.log(res);
//task 6 Done
// Write a function mergeArrays that takes two arrays as input and returns a
// new array containing all the elements from both arrays.
// const first =[1,2,3]
// const second =[4,5,6]
// const mergeArrays= first.concat(second)
// console.log(mergeArrays)
//task 7 Done
//Write a JavaScript function that flattens a nested array of any depth

// const arr1=[1, [2, 3], [[4], [5, 6]]]
// const arr2=[1, [2, [3, [4, [5]]]]]
// const res1 = arr1.flat(Infinity)
// const res2 = arr2.flat(Infinity)
// console.log('res1',res1)
// console.log('res2',res2)
//task 8 Done
// const numbersArr =[10, 20, 30, 40, 50]; // find first el bigger then 25
// let num = numbersArr.find(num => num >25);
// console.log('num',num);
// let fruits = ['apple', 'banana', 'orange', 'kiwi'] //find first el which beginning letter'o'
// let fruit = fruits.find((fruit ) =>{
//     if( fruit[0]=== 'o'){
//         return fruit;
//     };
// } );
// console.log(fruit);
//task 9 Done
// const numbersArr=[1,2,3,4,5]; //check in [] el===3
// let find3num= numbersArr.includes(3)
// console.log(find3num)
//------------
//  const fruits = ['apple', 'banana', 'orange', 'kiwi'] //check in [] el=== 'grape'
// function checElement(arr, element) {
//     return arr.includes(element)}
// console.log(checElement(fruits, 'grape'))
//------------
//task 10 Done
// const filterGreaterThan = (arr, element) => {
//     return arr = arr.filter(num => num > element)
// }
//  const numbersArr =[10, 20, 30, 40, 50]; //25
// const numbersArr2 = [5, 15, 25, 35, 45]; //20
// console.log(filterGreaterThan(numbersArr, 25));
// console.log(filterGreaterThan(numbersArr2, 20));
//task 11 Done
// let people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
// ];
//
// const SortedNames =(arr, el)=>{
//     return arr.sort((a, b) => a[el].localeCompare(b[el]));
// }
// console.log(SortedNames(people, 'name'));
// let numbers1 = [5, 2, 8, 1, 4];
//
// const SortedNumbers = (arr)=>{
//     return arr.sort((a, b) => a -b);
// }
// console.log(SortedNumbers(numbers1));
//task 12 Done
// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ];
// const formattedData = data.map((item) => {
//     return {
//         value: item.value,
//         label: item.name,
//     }
// })
// // console.log(formattedData);
// let products = [
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
// ];
//
// const productWithDiscooun = products.map((product) =>{
//     return{
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         discountPrice: product.price * 0.9,
//     }
// });
// console.log(productWithDiscooun)
//task 13 Done
// const IsPalindrome = (text) => {
//     const ReverseStr = text.split('').reverse().join('') === text
//     return ReverseStr;
//
// }
// console.log(IsPalindrome('level'))