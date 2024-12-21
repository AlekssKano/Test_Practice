//
// console.log('1')
//
// setTimeout(()=>{
//     console.log('2')
// }, 2000)
// console.log('3')
// //написать функцию, которая делает запрос на сервер(прошивает Базу данных) каждые 3 секунду через setTimeout
//


// const getData = ()=>{
//     return new Promise((resolve, reject) => {
//         const data=4
//         // setTimeout(() => {reject('3')},1000)
//         if (data===3){
//             resolve('from server')
//         }
//         else{
//             reject('from reject')
//         }
//     })
//
// }
// const promise =getData()
// promise.then(data=>{
//     console.log(data)
// }).catch(err=>{})
// promise.catch(err=>{ // для ловли прчиины ошибки
//     console.log(err)
// })
//
// promise.then(data=>{
//     console.log(data)
// })
//     .then(data=>{
//     console.log('1')
// }).then(data=>{
//     console.log('2')
// }).then(data=>{
//     console.log('3')
// }) .catch(err=>{})
//
// promise.catch(err=>{
//     console.log(err)
// })

// const delayFunction = (ms)=> {
//      return new Promise((res, reg) => {
//            setTimeout(() => {
//             res();
//
//         }, ms)
//     })
// }
// // promice1.then(()=>{console.log("hello!")})
// delayFunction(2000).then(()=>{console.log("hello!")})
//

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             // resolve("some response")
//             reject('Some Error')
//         },
//         1000);
// })
//
// promise
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((data) => {
//         console.log(data)
//     })

import fetch from 'node-fetch';


// fetch('https://bing.com').then((data) => {
//     console.log('data from bing', data.url)
//     return fetch('https://yahoo.com')
// })
//
//     .then((data) => {
//         console.log('data from yahoo', data.url)
//         return fetch('https://google.com')
//     })
//     .then((data) => {
//         console.log('data from google', data.url)
//     }).catch((err)=>{
//     console.log(err, 'err')
//     }).finally(()=>{
//         console.log('finally')
// })


// console.log("start")
// const asyncFoo = async () => {
//    try {
//         const yahooData = await fetch('https://yahffdfdoo.com')
//         console.log('yahooData', yahooData.url)
//         const googleData = await fetch('https://google.com')
//         console.log('googleData', googleData.url)
//         const bingData = await fetch('https://bing.com')
//         console.log('bingData', bingData.url)}
//     catch(e){
//         console.log(e, 'ERROR')
//     }
// finally{
//        console.log('finally')
//    }
//
// }
// asyncFoo()
// console.log("finish")
//
//
//


const p1=fetch('https://yahoo.com')
const p2= fetch('https://goo44gle.com')
const p3= fetch('https://bing.com')

// const bigPromise = Promise.all([p1,p2,p3]) //пройдет, если все прошли
//
// bigPromise.then((data)=>{
//     console.log('succsess BigData', data)
// }).catch((err)=>{
//     console.log('Erorr', err)
// })

// const bigPromise = Promise.any([p1,p2,p3]) // пройдет, если прошел хоть 1
//
// bigPromise.then((data)=>{
//     console.log('succsess Data', data.url)
// }).catch((err)=>{
//     console.log('Erorr', err)
// })

// const bigPromise = Promise.race([p1,p2,p3]) // используется для пинговая ресурсов
// // , отмечает тот, который отвечает быстрее всего. Он вернет либо ошибку,
// // либо данные, того сервера, который отвечает  БЫСТРЕЕ всего
//
// bigPromise.then((data)=>{
//     console.log('succsess Data Race', data.url)
// }).catch((err)=>{
//     console.log('Erorr', err)
// })



const bigPromise = Promise.allSettled([p1,p2,p3]) // пройдет, если прошел хоть 1

bigPromise.then((data)=>{
    console.log('succsess AllSettled', data)
}).catch((err)=>{
    console.log('Erorr', err)
})