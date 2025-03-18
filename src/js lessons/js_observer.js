// patter subscriber ===handler===listener ===wathcer===observer

// store.subscribe(function(){})  //store change=>subscriver was invoked
// button.addEventListener('click', function(){})
// setTimeout(function(){},2000)
//
// app.get('/users',function (){}) //route was invoke

// const button = {
//     subscribers:{
//         click:[],
//         focus:[]
//     },
//     click(){
//         console.log("button");
//         button.subscribers.click.forEach((s)=>s())
//     },
//     addEventListener(eventName,subscriber){
//         button.subscribers[eventName].push(subscriber)
//         return()=>{
//             this.removeEventListener(eventName,subscriber)
//         }
//     },
//     removeEventListener(eventName,subscriber){
//         button.subscribers[eventName]= button.subscribers[eventName].filter((s)=>s!==subscriber)
//     }
// }
//
// const handeler =function (){
//     console.log('Handler 1')
// }
// const unsubscriber =button.addEventListener('click', handeler)
// // button.addEventListener('click', (event)=>{
// //     console.log('Handler 2')
// // })
// button.click()
// unsubscriber()
// // button.removeEventListener('click', handeler)
// button.click()

//События
const handler = (event)=>{
    console.log('divClicked')
    event.preventDefault()//отменяет действие по умолчанию
    event.stopPropagation() //останавливает всплытие
    console.log('target', event.target.id) //элемент который создал событие
    console.log('CurrentTarget',event.currentTarget.id)//элемент который вызвал событие
}
const smallDiv=document.querySelector('#small');

smallDiv.addEventListener('click',handler);

smallDiv.onClick=handler