

// proto && prototype

class Car {

    constructor (brand, speed){
        this.brand = brand;
        this.speed = speed;
        this.state={}
    }
    startEngine(){
        console.log(`startEngine ${this.brand}`)
    }
    stopEngine=()=>{
        console.log(`stopEngine ${this.brand}`)
    }
}
const car1 = new Car('bmv', 200);
const car2 = new Car('bmv', 200);
console.log(car1===car2)
console.log(Object.getPrototypeOf(car1)===Car.prototype)

console.log(car1.constructor===Car)