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