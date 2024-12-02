let car = "bmv"

function startEngine(){
    console.log(car)
    function fn(){
        const model=123
        console.log(`car =${car} model =${model}`)
    }
    fn()
}

car = 'ferrari'
startEngine()

const counterCreator = (arg)=>{
    let count = 0;

    return()=>{
        console.log(++count)
    }
}



const counter1 = counterCreator()
const counter2 = counterCreator()

// counter1()
// counter1()
// counter1()
// counter2()
// counter2()
// counter2()


const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
pow(2,4)
// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)


const sqe = (num)=>{

    return  num*2
}
const memoize = function(fn){
    let cache ={}

    return(arg)=>{
        if(cache[arg]){
            console.log(cache);
            return cache[arg]
        }
        const result = fn(arg)
        cache[arg] = result
        return result
    }

}
const memoizedSqr = memoize(sqe);

console.log (memoizedSqr(5))
console.log (memoizedSqr(5))
console.log (memoizedSqr(6))


const nestedObject={
    name:'Alice',
    details: {
        age: 25,
        address: {
            city: "Wonderland",
            zip: 12345,
        },
    },
    hobbies:['reading', 'chess'],
    otherDetails:{
        address:{
            city:'Nowhere',
            zip: 67982,
        }
    }
}

function findAdress (obj, keyFind, result=[]){
for(let key in obj){
    if (key === keyFind){
        result.push(obj[key]);    }
    if(typeof obj[key] === 'object'){
        findAdress(obj[key], keyFind, result)
    }
}
    return result

}

const cities= findAdress(nestedObject,'city')
console.log(cities)