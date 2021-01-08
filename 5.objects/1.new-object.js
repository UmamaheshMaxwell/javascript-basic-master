var person = new Object();

person["firstName"] = "uma"
person["lastName"] = "mahesh"
person["age"] = 1;
person["isAdmin"] = true;
person["address"] = null;
person["state"] = undefined;
person["getName"] = function(){
    return firstName + " " + lastName;
}
person["children"] = new Object();
person["children"]["section"] = "B"

person.children.name ="johngalt"
person.children.grade = "A++"

person["skillset"] = ["C#", "JavaScript", "Python"]

var child ="children"
console.log(person)

console.log(person[child])
console.log(person.children)