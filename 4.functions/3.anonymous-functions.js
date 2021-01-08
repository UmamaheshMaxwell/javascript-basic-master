var getName = function (firstName, lastName){
    return firstName + " " + lastName
}

var fullName = getName("uma", "mahesh");
console.log(fullName)

var fullName = getName("uma");
console.log(fullName)

var fullName = getName();
console.log(fullName)

// function wishMe(message){
//     return message
// }

var sayHello = function wishMe(message){
    return message
}

console.log(sayHello("Hello"))

console.log(wishMe("Please wish me")) // invalid