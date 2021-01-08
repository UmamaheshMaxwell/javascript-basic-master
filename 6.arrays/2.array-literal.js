var students = ["Guru", "Srujana", "Harsha", "Anand"];
console.log(students)

var people = []
people[0] ="uma"
people[1] ="mahesh"
people[2] ="meka"
people[3] ="johngalt"
console.log(people)
console.log(Array.isArray(people))

var names = ["Uma", "Guru", "Srujana", "Harsha"]
console.log(names)

var fruits = ["Orange", "Apple", "Banana", "Gauva"]
var vegetables = ["Potato", "Tomato", "Brinjal", "Drumstick"]

console.log(fruits)
console.log(vegetables)
var items = vegetables.concat(fruits)
console.log(items)

var movies = ["Avatar", "Good will hunting", "Vanilla Sky", "MARS"]

console.log(movies)
console.log("Array: ", Array.isArray(movies))

var movieString = movies.join(",") // convert array to string

console.log (movieString)
console.log(typeof movieString)