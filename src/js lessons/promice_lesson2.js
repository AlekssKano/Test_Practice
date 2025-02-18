const axios ={}
const fundUserInDB=(id)=>{}

// const promice1 = axios.get('https://google.com')
//
// promice1.then((data)=>{
//     console.log(data)
// })
//
// console.log(promice1)
//
// function getNumber(){
    // const promice = Promise.resolve(Math.random())

//     const promise = new Promise((resolve,reject)=>{
// reject('error')
//         setTimeout(()=>{
//             resolve(Math.random())
//
//         },2000)
//     })
//     return promise
//
// }
//
// getNumber().then(n=>console.log(n))
// getNumber().then(n=>console.log(n))

// const repo ={
//     save(data) {
//         localStorage.setItem('name', JSON.stringify(data))
//     }
// }
//
// repo.save({name:'Ototo'})
// console.log("Saved")

function counting(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
        },2000)
        setTimeout(()=>{
            console.log(2)
        },3000)
        setTimeout(()=>{
            console.log(3)
        },4000)
        resolve()
    })
}
function wait(ms){
    return new Promise((resolve,reject) => setTimeout(()=>{resolve()},ms))
}


async function run(){
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
}
run()