function Student(){
    this.name ="John Galt"
    this.gender = "M"
}

var stuObj = new Student();

console.log(Student.prototype)
console.log(stuObj.__proto__)
console.log(typeof Student.prototype)
console.log(typeof stuObj.__proto__)
console.log(Student.prototype === stuObj.__proto__)