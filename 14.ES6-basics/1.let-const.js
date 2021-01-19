// var a = 10;
// var b = 15;
// var a = 4;

// console.log(a)
// console.log(b)

// // function scoped
// function hello (){
//     if(true){
//         var message = "This is true"
//     }
//     console.log(message)
// }
// hello();

let a =10;
let b =15;
 a = 5;
console.log(a)
console.log(b)

if(true){
    var message1 = "This is true"
}
console.log(message1)

// let is block scoped
if(true){
    let message1 = "This is true - from line30"
    console.log(message1)
}

if(true) {
    const constMessage = "This is const message"
    console.log(constMessage)
}
//console.log(constMessage)

let num1;
const num2 =20;
num1=5;
num1=10;
//num2=30;
console.log(num1, num2)

const obj = {
    name: 'uma'
}
Object.freeze(obj)
obj.name="Mahesh"
console.log(obj)

function sample(){
    let firstName="uma"
    if(true){
       let firstName = " Mahesh"
    }
    console.log(firstName)
}
sample();
//console.log(firstName)