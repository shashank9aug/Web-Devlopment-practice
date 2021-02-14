class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    isAdult() {
      return this.age >= 18
    }
}
  
let p1 = new Person('John Doe', 22)
let p2 = new Person('Jane Doe', 15)
  
console.log(typeof Person) // function; there is NO new datatype called 'class'
console.log(p1.__proto__ == Person.prototype) // true
console.log(p1.__proto__.__proto__ == Object.prototype) // true


/*
  p1.isAdult()
true
p2.isAdult()
false
p1.isAdult==p2.isAdult
true
p1.__proto__.isAdult
function isAdult()

Person.prototype
Object { … }

Person.__proto__.prototype
undefined
Person.__proto__
function ()
*/