function getNumber() {
    // const promise= Promise.resolve(Math.random())  1 var


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())

        }, 2000);

    })
    return promise
}


const repo = {
    save(data) { // Not good var
        try {
            localStorage.setItem('name', JSON.stringify(data))
        } catch (err) {
            return false
        }

        return true;
    },

    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('name', JSON.stringify(data))
                resolve()
            } catch (err) {
                reject(err)
            }

return promise
        })
    },
    read(){
        return new Promise((resolve, reject) => {
const data = localStorage.getItem('name')
            if(!data){
                resolve(null)
            }
            else{
                resolve(JSON.parse(data))
            }
        })
    }
}

// const result =repo.save({name:"No good var"})
// if(result){
//     console.log("saved")
// }else{
//     console.log('Not saved')
// }

// const promise =repo.saveAsync({name:"Good var"})
// promise
//     .then(()=>{console.log('saved')})
//     .catch((err)=>{console.warn("Not saved" + err)})
//

const run =async()=>{
    await repo.saveAsync({name:"Async var"})
console.log('Saved')
    const data = await repo.read()
    console.log(data)

}

function wait(ms){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
    return promise
}
async function run1(){
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
run1()