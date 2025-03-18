// const car1 ={
//     brand:'bmv',
//     color:'red',
//     startEngine1(){
//         console.log(`${this.brand} started`);
//     }
// }
// const car2 ={
//     brand:'bmv',
//     color:'red',
//     startEngine1(){
//         console.log(`${this.brand} started`);
//     }
// }
// function createCarr(brand,color){
//     const car = {
//         brand: 'tia',
//         color: 'green',
//         startEngine1() {
//             console.log(`${this.brand} started`);
//         }
//     }
//     return car
// }
// const car3=createCarr('kia', 'blue')
// const car4=createCarr('toyota', 'yellow')
//
// // console.log(car3)
// // console.log(car4)
//
// function CarCreator(brand,color){
//     this.brand = brand
//     this.color = color
//
// }
// CarCreator.prototype.startEngine = function(){
//     console.log(`${this.brand} started`)
// }
//
// const car5= new CarCreator('kia', 'blue')
// const car6=new CarCreator('toyota', 'yellow')
// console.log(car5)
// console.log(car6)
// console.log(car6.startEngine())

class Car {
    #wheel = 4  //приватное свойства
    constructor(brand, color,maxSpeed) {
        this.brand = brand
        this.color = color
        this.maxSpeed=maxSpeed
    }
    set wheel(value) {
        if (typeof value === 'number') {
            this.#wheel = value
        } else {
            throw new Error(`Value ${value} is not a number`)
        }}
    get wheel() {
        return this.#wheel

    }
    startEngine() {  // это ВСЕГО 1 функци, и поэтому они будут равны
        // console.log(car1.startEngine===car2.startEngine) НУЖНО ВОТ ТАК!
        console.log(`${this.brand} started`)
    }
    stopEngine = function () {
        console.log(`${this.brand} stopped`) // эта функция с приравниванием, ТАК НЕ НАДО ДЕЛАТЬ
        // она будет создаваться каждый раз по-новой и эти функции не будут равны
        // console.log(car1.stopEngine===car2.stopEngine)
    }
    static CompareCars(car1,car2){
        car1.maxSpeed === car2.maxSpeed
            ? console.log(`Cars have same speed`)
            : car1.maxSpeed > car2.maxSpeed
                ? console.log(`${car1.brand} is faster`)
                : console.log(`${car2.brand} is faster`);
    }

}

// const car1 = new Car('kia', 'blue','200')
// const car2 = new Car('toyota', 'yellow','300')
// console.log(car1.brand)
// car1.brand = 'volvo'
// console.log(car1.brand)
// console.log(car1.wheel)
// car1.wheel = 5
// console.log(car1.wheel)
// Car.CompareCars(car1,car2)
// ===console.log(car2)
// car2.startEngine()
// car1.startEngine()
// console.log(car1.startEngine===car2.startEngine) //true
// console.log(car1.stopEngine===car2.stopEngine) // false

///наследвание!

class SuperCar extends Car{

    constructor(brand, color,isFly,maxSpeed){
        super(brand,color,maxSpeed)
        this.isFly = isFly
    }
    isFlying(){
        console.log(`isFly ${this.brand}`)
    }
    startEngine() {
        super.startEngine()
        console.log(`${this.brand} isFlying `)

    }
}
const superBmv = new SuperCar('bmv','black',true, 200)

console.log(superBmv)
superBmv.isFlying()
superBmv.startEngine()
SuperCar.CompareCars(superBmv,superBmv)