//
// console.log('1')
//
// setTimeout(()=>{
//     console.log('2')
// }, 2000)
// console.log('3')
// //написать функцию, которая делает запрос на сервер(прошивает Базу данных) каждые 3 секунду через setTimeout
//


const getData = ()=>{
    return new Promise((resolve, reject) => {
        const data=4
        // setTimeout(() => {reject('3')},1000)
        if (data===3){
            resolve('from server')
        }
        else{
            reject('from reject')
        }
    })

}
const promise =getData()
// promise.then(data=>{
//     console.log(data)
// }).catch(err=>{})
// promise.catch(err=>{ // для ловли прчиины ошибки
//     console.log(err)
// })

promise.then(data=>{
    console.log(data)
})
    .then(data=>{
    console.log('1')
}).then(data=>{
    console.log('2')
}).then(data=>{
    console.log('3')
}) .catch(err=>{})

promise.catch(err=>{
    console.log(err)
})