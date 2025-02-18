//1 export const res1 =fetch('https://yahoo.com/?query=js')
// console.log(res1)
// const res2 =fetch('https://bing.com/?query=js')
// console.log(res2)
// const res3 =fetch('https://google.com/?query=js')
// console.log(res3)

//2 export const res1_1 =fetch('https://yahoo.com/?query=js')
//     .then((res)=>{
//         console.log(res.url)
//         return fetch('https://bing.com/?query=js')
//     })
//     .then(data=>{
//         console.log(data.url)
//         return fetch('https://google.com/?query=js')
//     })
//     .then(res=>{
//         console.log(res.url)
//     })
// .catch(error=>{
//     console.log(error)
// })

const GlobalFunct = async () => {


    const run = async () => {
        try {
            console.log(1)
            const yahooData = await fetch('https://yahoo.com/?query=js')
            console.log("yahooData", yahooData.url)
            const bingData = await fetch('https://bing.com/?query=js')
            console.log('bingData', bingData.url)
            const googleData = await fetch('https://google.com/?query=js')
            console.log('googleData', googleData.url)
        } catch (e) {
            console.log(e.message)
        }
    }

    await run()

}
GlobalFunct()