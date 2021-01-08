function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var student =  new Student("Uma", "mahesh")

student.name = "uma"
student.age = 38
student.city ="Hyd"

console.log(student)