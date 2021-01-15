function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function (){
    return this.firstName + " " + this.lastName;
}

function Student(age){
    this.age = age;
}

// Inherit the properties from supertype
Student.prototype.gender = 'Male'
Student.prototype = new Person("John", "Galt");


Student.prototype.getAge = function(){
    return this.age;
}

// function Customer(){
//     this.product = "TV"
// }

// // Inherit the properties from supertype
// Customer.prototype = new Person("Srujana", "Duvvuri")
// Customer.prototype = new Student(25)
var student = new Student(38);
console.log(student)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getFullName())
console.log(student.getAge())

// var customer = new Customer();
// console.log(customer)
// console.log(customer.firstName)
// console.log(customer.lastName)
// console.log(customer.age)
// console.log(customer.getFullName())
// console.log(customer.getAge())


