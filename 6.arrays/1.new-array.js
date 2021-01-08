var people = new Array(3)

people[0] ="uma"
people[1] ="mahesh"
people[2] ="meka"
people[3] ="johngalt"
console.log(people)
console.log(Array.isArray(people))

var names = new Array("Uma", "Guru", "Srujana", "Harsha")
console.log(names)

var fruits = new Array("Orange", "Apple", "Banana", "Gauva")
var vegetables = new Array("Potato", "Tomato", "Brinjal", "Drumstick")

console.log(fruits)
console.log(vegetables)
var items = vegetables.concat(fruits)
console.log(items)

var movies = new Array("Avatar", "Good will hunting", "Vanilla Sky", "MARS")

console.log(movies)
console.log("Array: ", Array.isArray(movies))

var movieString = movies.join(",") // convert array to string

console.log (movieString)
console.log(typeof movieString)