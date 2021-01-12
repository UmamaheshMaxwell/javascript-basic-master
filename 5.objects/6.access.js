// var person = {
//     firstName: 'Uma',
//     lastname: 'Mahesh',
//     city: 'Hyderabad',
//     isAdmin: true
// }

// person.age = 38;
// person.firstName = 'Johngalt'
// delete person.isAdmin;
// console.log(person)

// Object.preventExtensions()
/*
    We can edit and delete but we can't add
    new properties.
*/
var preventObject = {
    name: 'mahesh',
    city: 'Bangalore',
    age: 25
}

Object.preventExtensions(preventObject)

preventObject.email ="uma@mahesh.com"
preventObject.name= "Umesh"
delete preventObject.age;
console.log(preventObject)

// Object.seal()
/*
    We can edit but we can't add 
    new properties or delete existing properties
*/
var sealObject = {
    name: 'johngalt',
    city: 'boston',
    age: 25
}

Object.seal(sealObject)

sealObject.email = 'uma@uma.com';
sealObject.name = 'Umesh';
delete sealObject.age;
console.log(sealObject)

//Object.freeze()
/*
    We can't edit or delete existing properties
    and can't add new properties
*/

var freezeObject = {
    name: 'johngalt',
    city: 'boston',
    age: 25
}

Object.freeze(freezeObject);

freezeObject.email = 'uma@uma.com';
freezeObject.name = 'Umesh';
delete freezeObject.age;
console.log(freezeObject)