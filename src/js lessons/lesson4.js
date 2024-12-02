// статические сво-ва
// const car ={
//     engine: "RWV-12345",
//     model: 'BMW',
//     color: 'black'
// }
//динамические сво-ва

// const isBooleanValue=true;
// const property_key = isBooleanValue? 'serialNumber' : 'color';
//     const car2={
//     [property_key]:isBooleanValue?'233-3565':'white'
// };
//     console.log('car2', car2)
//2
// const newFunc =()=>'test value';
// const newObj={
//     'newKey':newFunc()
// }
// console.log(newObj)
//конкатенация

// let newPropery='_new';
// let number =2;
// const obj3={
//     test:'new Test keys',
//     ['color'+newPropery]:'black',
//     [number+2]:'four',
// }
// console.log('obj3', obj3);
////
//
// let propertNew='name'
// const user={
//     testValue:'test value',
//     [propertNew.toUpperCase()]:'name with upper case letters'
// }
// console.log(user)
//Preactical Task

// const Status_Busy ='busy';
// const Status_Ready='ready';
// const Status_Labels={
//     [Status_Busy]: 'Ожидает',
//     [Status_Ready]: 'Готов к отправлению',
// }
//
// const drivers=[
//     {name:'Pavel', status:'busy'},
//     {name:'Ira', status:'ready'},
//     {name:'Lola', status:'busy'},
// ]
// const driverStatuses= drivers.map((driver)=>{
//     console.log('driver', driver)
// const {status}=driver;
//     console.log('status', status);
//     return Status_Labels[status]
// })
// console.log('driverStatuses', driverStatuses);

//Object.key(), Object.values(), Object.entries()
//Object.keys() - принимает в себя обхект и возвращает массив ключей
// const user ={
//     isStudent: 'true',
//     name: 'Vadim'
// }
// const result =Object.keys(user)
// console.log(result)
// const user2 ={
//     isStudent: 'false',
//     name: 'Test',
//     country:{
//         city:"London"
//     }
// }
// const result2 = Object.keys(user2)
// console.log(result2)
///
///Object.values -принимает в сбя объект и возвращает массив значений
// const user ={
//     isStudent: 'true',
//     name: 'Vadim'
// }
//
// const valuesresult =Object.values(user);
// console.log(valuesresult);
// const user2 ={
//     isStudent: 'false',
//     name: 'Test',
//     country:{
//         city:"London"
//     }
// }
// const valuesresult2 =Object.values(user2);
// console.log(valuesresult2);


///Object.entries()
// const user ={
//     isStudent: 'true',
//     name: 'Vadim'
// }
// const entriesResult=Object.entries(user);
// //console.log(entriesResult);
// const testObj ={
//     isStudent: 'false',
//     name: 'Test',
//     country:{
//         city:"London"
//     }
// }
// const entriesResult2=Object.entries(testObj);
// console.log(entriesResult2);

///Practic Task

// const formValues= {
//     name:"Test",
//     age: '',
//     address:'New-York'
// }
// const validateForm =(data)=>{
//     let emptyField = Object.keys(data).filter(key=>data[key]==="")
//     if (emptyField.length>0) {
//         console.log("Enter")
//     }
//     else{
//         console.log("Number 2")
//     }//
// }
// const res = validateForm(formValues);
// console.log(res)

///New Map/New Set
//New Map - это коллекция ключ-значения , как и объект. Ключи могут быть люього типа

const map = new Map()

map.set(true, 'boolean value')
map.set({}, 'object value')
map.set(4, 'number 4')
map.set('4', 'string 4')
// console.log('map collection', map)
///map.get()

// console.log('map collection', map.get(4))

///map.has()

// console.log(map.has(true))
//
// console.log(map.has(3))
///map.delete()

// map.delete('4')
// map.delete(true)
// console.log('map collection', map)

///map.clear()
// map.clear()
//  console.log('map collectionafter clear ', map)

// const map1= new Map()
// console.log(typeof map1)

// const initialData=[
//     ['key', 'value'],
//     [true, 'boolean value'],
//     [{}, 'object value'],
// ]
//
// const map2 = new Map()
// console.log(map2)

//NewSet

//1

// const set = new Set()
// set.add({})
// set.add(true)
// set.add(1)
// set.add({})
// set.add(true)
//
// console.log(set)

//2
// let arr=['test', 1, 23,44,6,1,1,1,1,'lol'];
//
// const set = new Set(arr)
//
// console.log(set);

//3
// let number=[1,1,2,2,3,4,5,6,7,8,8,10,'a','a','b']
//
// let uniqueNumbers=new Set(number)
//
// console.log(uniqueNumbers)
//
// let uniqueArr=[...uniqueNumbers]
// console.log(uniqueArr)
//short variant
// let number=[1,1,2,2,3,4,5,6,7,8,8,10,'a','a','b']
// let result =[...new Set(number)]
// console.log(result)