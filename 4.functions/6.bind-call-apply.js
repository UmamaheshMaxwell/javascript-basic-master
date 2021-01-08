var person1 = {firstName: 'Uma', lastName: 'Swathi'}
var person2 = {firstName: 'Jagrav', lastName: 'Meka'}

function getMessage(message, city){
    return message + ' to ' + city + ' ' +  this.firstName + ' ' + this.lastName;
}

function getFullName(){
    return this.firstName + ' ' + this.lastName;
}

var bindMethod = getMessage.bind(person1)
console.log(bindMethod)
console.log(bindMethod("Welcome", "Hyderbad"))

var callMethod = getMessage.call(person1, "Welcome", "Sydeny")
console.log(callMethod)

var callMethod = getMessage.apply(person2, ["Welcome", "Sydeny"])
console.log(callMethod)


var getBindFullName = getFullName.bind(person1)
console.log(getBindFullName())

var getcallFullName = getFullName.call(person2)
console.log(getcallFullName)

var getapplyFullName = getFullName.apply(person1)
console.log(getapplyFullName)

var bindMethod = getMessage.bind(person1, "Welcome", "Bangalore")
console.log(bindMethod())


function sayHello(){

}

sayHello.firstName = "Uma"
sayHello.lastName ="Mahesh"
console.log(sayHello.firstName)
console.log(sayHello.lastName)

var data = getMessage.bind(sayHello)
console.log(data("Welcome", "Delhi"))