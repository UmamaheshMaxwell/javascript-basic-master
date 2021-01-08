 var items1 = ["chair", "bench", "iPad", "laptop"]

console.log(items1)

// using for loop
console.log('Using for loop')
for(var i=0; i<items1.length; i++) {
    console.log(items1[i])
}

// using foreach loop
console.log('Using Foreach Method')
items1.forEach(function(value){
    console.log(value)
})

// using map 
console.log('Using Map Method')
items1.map(function(item){
    console.log(item)
})

// Difference between foreach and Map

 console.log('Using Foreach Method')
var forEachItems = items1.forEach(function(item){
                        return item + 1
                   })

console.log(forEachItems)
// using map 
console.log('Using Map Method')
var mapItems = items1.map(function(item){
                    return item + " - " + 1
               })

console.log(mapItems)