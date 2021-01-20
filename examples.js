function getPerson1(){
    return 
    {
        firstName: 'uma'
    }
}

function getPerson2(){
    return {
        firstName: 'mahesh'
    }
}

console.log(getPerson1())

console.log(getPerson2())

/*===========================*/

console.log(1==1)
console.log(1 == "1")
console.log(1 === "1")

/*===========================*/

var name1 = "srujana" + 1 + 2 +3
console.log(name1)

var name2 = 1 + 2 + "srujana" 
console.log(name2)

var name3 = 1 + 2 + "srujana" + 3 + 4

/*===========================*/

console.log(multiply(2)(3)(4))

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}

/*===========================*/
var a=10;
var b=a;
    a=20;
console.log(a)
console.log(b)

/*===========================*/
var a=[1,2]
var b= a
    a.push(3)

    console.log(a)
    console.log(b)

/*===========================*/
var a = [1,2]
var b = a;
    a = [1,2,3]

console.log(a)
console.log(b)

/*===========================*/
var output = (function(x){
    delete x;
    return x;
 })(0)
console.log(output)

/*===============================*/

var arrayList = ['a', 'b', 'c', 'd']

// first way 
 arrayList= []

// second
arrayList.length = 0

// third
arrayList.splice(0, arrayList.length)

// fourth - Guru Nag - Working
while(arrayList.length){
   arrayList.pop()
}

// fifth - Sree Harsha
for(var i=arrayList.length; i>0; i--){
    arrayList.pop()
 }

 // // srujana's 
// arrayList.forEach(function(){
//    arrayList.pop()
// })

console.log(arrayList)


/*===============================*/

var x = {foo:1}

var output = (function(){
   delete x.foo;
   return x.foo
})()

console.log(output)
console.log(x)

/*===============================*/

var trees = ["redwood", "bay", "cedar", "oak", "maple"]

delete trees[3]

console.log(trees)

/*===============================*/

// Private Methods ( methods which are not accessible outside)
var Module = (function(){

    var privateMethod = function(){
        return "This is private method"
    }
})();

console.log(Module)

/*===============

Locally scoped object literal

================*/

var Module = (function(){

    var privateMethod = function(){
        
    }

    var myObject= {};

    myObject.publicMethod1 = function(){
        return "This is public method1"
    }
    myObject.publicMethod2 =  function(){
       return "This is public method2"
   }
   myObject.publicMethod3=  function(){
       return "This is public method3"
   }

 return  myObject
})();

console.log(Module)

/*===============================*/

var Module = (function(){

    var privateMethod = function(message){
        console.log('you tried accessing private method from public')
        return message;
    }

    var publicMethod = function(text){
        //code 
          return privateMethod(text)
        // code
    }

    return {
        publicMethod : publicMethod
    }

})();

console.log(Module.publicMethod("Hello World"))

/*===============================*/

var z =1;
var x = y = z;
console.log(x)
console.log(y)

var x,y = z
console.log(x)
console.log(y)

/*===============================*/

console.clear()
console.log("Hello")

/*===============================*/

var array = [
    {index:0, id:1,name: 'Uma', age:38},
    {index:1,id:2,name: 'Swathi', age:38},
    {index:2, id:3, name: 'Jagrav', age:7}
]

console.table(array)

var person1 ={ name: 'johngalt', city: 'boston'}

console.table(person1)

/*===============================*/

console.log("Hello")
console.warn("Please handle this")
console.error({message: "There is an error"})

/*===============================*/

console.log("Hello %s, your ID is %i", "uma", 12345)

/*
  %s - string
  %i - integer
  %o - object
  %f - float
*/

var obj = {name: 'Johngalt', city: 'Boston'}

console.log("data objects are %o and %o ", 
            obj, 
            ["red", "green", "blue"])

/*===============================*/

/*  
    split()
    reverse()
    join()
 */
var message= "Hello how are you" // olleh woh era uoy
console.log(message)

var data = message.split("").reverse().join("")
                  .split(" ").reverse().join(" ")

console.log(data)


/*===============================*/
// isEven(2) // true
// isEven(3) // false

function isEven(value){
    if(value %2 == 0){
        return true
    } else {
        return false
    }
}

function isEven(value){
   return value %2 == 0
}

console.log(isEven(2))
console.log(isEven(3))

/*===============================*/

/*
   getExtension(filname) 
   resume.doc : doc
   sample.pdf: pdf
   data.txt: txt
   notepad: 'No extension'
*/

function getExtension(fileName) {
    var file = fileName.split(".")
    if(file[1]){
        return file[1]
    } else {
        return 'No Extension'
    }

}
function getExtension(fileName) {
    return fileName.split(".").length > 1 ? fileName.split(".")[1]: 'No Extension'
}

console.log(getExtension('resume.doc'))
console.log(getExtension('sample.pdf'))
console.log(getExtension('data.txt'))
console.log(getExtension('notepad'))


/*===============================*/

// arraySum([1,2,3,4,5]) //15
// arraySum([1,2,3,4,5,6,7,8,9,10]) //55
// arraySum([1,2, 3, 'uma', 4, 5]) // 15
// arraySum([1,2, 3, 'uma', {'a' : 'uma'}, 4, 5]) // 15
// arraySum([1,2,[[3],4], 5]) // 15

function arraySum(array){

    var total = 0;

    for(var i =0; i<array.length; i++){
        total += array[i]
    }

    return total;
}

console.log(arraySum([1,2,3,4,5]))
console.log(arraySum([1,2,3,4,5,6,7,8,9,10]))

/*===============================*/

var div1 = document.getElementById('dvMessage')
console.log(div1.innerHTML)

var div2 = document.getElementsByClassName("container")
console.log(div2)

function clickMe(){
    alert('did you click me ?')
}

function promptMe(){
    result = prompt("Hello", ' ');
    console.log(result)
}