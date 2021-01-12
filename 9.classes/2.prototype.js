function Student(firstName, lastname){
    this.firstName = firstName;
    this.lastname = lastname;
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastname
}

var student1 = new Student("Guru", "Nag");
console.log(student1)
console.log(student1.firstName)
console.log(student1.lastname)
console.log(student1.getFullName())



var student2 = new Student("Sree", "Harsha");
console.log(student2)
console.log(student2.firstName)
console.log(student2.lastname)
console.log(student2.getFullName())



var student3 = new Student("Srujana", "Duvvuri");
console.log(student3)
console.log(student3.firstName)
console.log(student3.lastname)
console.log(student3.getFullName())

console.log(this)