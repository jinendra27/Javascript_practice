window.alert('hello')

// const Car = function(make,speed){

//         this.make = make
//         this.speed = speed

// }
// Car.prototype.accelerate = function(){

//             this.speed += 10;
//             console.log(`${this.make} is going at speed ${this.speed}`)
//     }

// Car.prototype.brake = function(){

//         this.speed -= 5;
//         console.log(`${this.make} is going at speed ${this.speed}`)
// }

// const BMW = new Car('BMW',0)
// console.log(BMW)
// BMW.accelerate()
// BMW.brake()
// BMW.accelerate()


// const AUDI = new Car('AUDI',10)
// console.log(AUDI)
// AUDI.accelerate()
// AUDI.brake()
// AUDI.accelerate()



// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       var date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   const myCar = new Car("Ford", 2013);
//   const myCar2 = new Car("Audi", 2009);
//   const mycar3 = new Car("safari",1998);  

//   console.log(`My ${myCar.name} is ${myCar.age()} years old`)
//   console.log(`My ${myCar2.name} is ${myCar2.age()} years old`)
//   console.log(`my ${mycar3.name} is ${mycar3.age()} years old`)

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   age(x) {                     passing parameter to class methods

//          return x - this.year;
//     }
//   }

//   let date = new Date();
//   let year = date.getFullYear();

//   const myCar = new Car("Ford", 2013);
//   const myCar2 = new Car("Audi", 2009);
//   const mycar3 = new Car("safari",1998);  

//   console.log(`My ${myCar.name} is ${myCar.age(year)} years old`)
//   console.log(`My ${myCar2.name} is ${myCar2.age(year)} years old`)
//   console.log(`my ${mycar3.name} is ${mycar3.age(year)} years old`)

// class person{

//     static namey = 'unknow';
//     static fullname = 'jinendra';

//     constructor(fullname,birthyear){

//         this.fullname = fullname
//         this.birthyear = birthyear
//     }
//     calAge(){

//         console.log(`${2021 - this.birthyear} years old`)
//     }
//     greeting(){

//         console.log(`welcome ${this.fullname}`)
//     }
//     set setfullname(name){

//         this.fullname = name;
//         console.log(`${this.fullname} is my fullname`)

//     }
//     get getfullname(){

//         console.log(`${this.fullname}`);

//     }
//     static info(){

//         console.log(this.namey)
//         console.log(this.fullname)
//     }
// }
// let chinmay = new person('chinmay deshpande',1990);
// console.log(chinmay)
// person.info()
// console.log(chinmay.__proto__ === person.prototype)
// chinmay.getfullname
// chinmay.greeting()

// chinmay.setfullname = 'jinendra gandhi'
// chinmay.getfullname
// chinmay.calAge()
// chinmay.greeting()

const Account = class {

    Holder = 'jinendra';
    transaction = [100,200,22,44,66,77,88,99,12,23,11,15];

    get latest() {

        return this.transaction[this.transaction.length - 1]
    }
    set lastTransaction(tran) {

        console.log(this.transaction.push(tran))
        console.log(this.transaction)
    }

    get popele() {

        console.log(this.transaction.pop())
        console.log(this.transaction)

    }
    get latestFive() {

        var count = 0;
        for (let i = this.transaction.length - 1; i > 0; i--) {

            if (count === 5) {

                break;
            }
            console.log(this.transaction[i]);
            count += 1;

        }
    }

}
const jinendra = new Account();
console.log(jinendra)
console.log(jinendra.latest)
jinendra.latestFive
jinendra.lastTransaction = 200
console.log(jinendra.latest)
jinendra.latestFive
jinendra.lastTransaction = 300
console.log(jinendra.latest)
jinendra.latestFive
jinendra.popele

const person = function (firstname, lastname, birthyear) {

    this.firstname = firstname
    this.lastname = lastname
    this.birthyear = birthyear
}
person.prototype.calcAge = function () {

    return this.age = 2021 - this.birthyear;


}
person.prototype.language = "marathi"

const chinmay = new person("chinmay", "deshpande", 1990)
const aakash = new person("aakash", "jadhav", 1990)

chinmay.__proto__.color = 'pink'

console.log(chinmay.hasOwnProperty('language'))
console.log(chinmay.hasOwnProperty('firstname'))
console.log(chinmay.hasOwnProperty('birthyear'))

console.log(chinmay)
console.log(aakash)

console.log(chinmay.language)
console.log(aakash.language)
console.log(chinmay.calcAge())
console.log(aakash.calcAge())
console.log(person.prototype === chinmay.__proto__)
console.log(person.prototype === aakash.__proto__)
console.log(aakash.__proto__ === chinmay.__proto__)
console.log(chinmay.color)
console.log(chinmay instanceof person)
console.log(aakash instanceof person)
console.log(chinmay.__proto__.__proto__)
console.log(chinmay.__proto__)
console.log(person.prototype)


// class person {

//     constructor(firstname, lastname, birthyear) {

//         this.firstname = firstname
//         this.lastname = lastname
//         this.birthyear = birthyear

//     }
//     calcAge(){

//         console.log(2021- this.birthyear)
//     }

// }

// const chinmay = new person("chinmay","deshpande",1990)

// console.log(chinmay.hasOwnProperty('firstname'))
// console.log(chinmay)
// console.log(person.prototype === chinmay.__proto__)
// console.log(chinmay instanceof person)
// chinmay.calcAge()









