var sample = function (){
    return "I am regular function"
}

console.log(sample())

var sample = (name) => {
    return "hey " + name + " I am fat arrow function"
}

console.log(sample('uma'))

var sample = name => "hey " + name + " I am fat arrow function";

console.log(sample('mahesh'))

var sample = name => `hey ${name} I am fat arrow function`;

console.log(sample('Umesh'))

var sample = (firstName, city) => `Hello ${firstName}, are you from ${city} ?`
console.log(sample('Johngalt', 'Boston'))