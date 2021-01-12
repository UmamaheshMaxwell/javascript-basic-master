function getPerson1(){
    return {
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