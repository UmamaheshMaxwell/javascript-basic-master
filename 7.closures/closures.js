function greet(message){
    var a =10;
    return function(name){
        return message + ' ' + name + ' ' +  a;
    }
}

var sayHello = greet("Hello")
console.log(sayHello)

var message = sayHello('Johngalt')
console.log(message)


var sayHello = greet("Hello")("Uma")
console.log(sayHello)
