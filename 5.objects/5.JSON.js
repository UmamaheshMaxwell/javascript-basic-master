// .net  ---XML--------java

// <data>
//     <person1>
//         <firstName></firstName>
//         <lastname></lastname>
//         <age></age>
//     </person1>
//     <person2>
//         <firstName></firstName>
//         <lastname></lastname>
//         <age></age>
//     </person2>
// </data>

var data = {
    "person1": { "firstname": 'uma', "lastName":'mahesh'},
    "person2": {"firstname": 'uma', "lastName":'mahesh'}
}

// JSON format
var person = {
    "firstname" : "uma",
    "lastname" : "mahesh",
    "age": 38
}

// Object literal format
var person = {
    firstname : "uma",
    lastname : "mahesh",
    age: 38
}

//{"firstname" : "uma","lastname" : "mahesh", "age": 38} - JSON
//{firstname : "uma",lastname : "mahesh", age: 38} - Object Literal
console.log(person)
console.log(data)

var person = {
    "firstname" : "John",
    "lastname" : "Galt",
    "age": 38
}

console.log(person)
console.log(typeof person)

var jsonStringified =  JSON.stringify(person)
console.log(jsonStringified)
console.log(typeof jsonStringified)

var jsonParsed =  JSON.parse(jsonStringified)
console.log(jsonParsed)
console.log(typeof jsonParsed)