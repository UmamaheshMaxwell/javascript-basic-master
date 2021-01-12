// class
function Student(firstName, lastName){

    // property of a class e.g. this.firstName
    this.firstName = firstName 
    this.lastName = lastName

    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

Student()

// creating an instance or object 
var student1 = new Student("Uma", "Mahesh"); 
var student2 = new Student(); //constructor

console.log(student1)

console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.getFullName())