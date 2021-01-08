var person = {}; // Object literal syntax

person.firstname = "Uma"
person.lastName ="Mahesh"
person.age = 38;
person.city= "Hyderabad"
person.isAdmin = true
person.children = {};
person.children.name = "johngalt"
person.children.city = "Bangalore"

person.skills = ["C#", "Javascript", "Python", "Devops"]
person.getFullName =  function(){
    return person.firstname + " " + person.lastName
}
person.assets = undefined
person.secretcode = null;
console.log(person)
console.log(person.getFullName())
console.log(person["city"])

// Another way of adding properties
var person2 = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    isAdmin: true,
    child: {
        name: 'johngalt'
    }
}

console.log(person2)