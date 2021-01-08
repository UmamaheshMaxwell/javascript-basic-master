(function(firstName, lastName){
    console.log(firstName + " " + lastName)
})("Uma", "Mahesh")

var fullname = (function(firstName, lastName){
    console.log(firstName + " " + lastName)
}("Uma", "Mahesh"))

var fullname = (function(firstName, lastName){
    console.log(firstName + " " + lastName)
}("Uma", "Mahesh"))

console.log(fullname)