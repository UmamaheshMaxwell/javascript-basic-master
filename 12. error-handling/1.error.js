try {
    var output = getMessage("Hello", "Uma")
}
catch(uma) {
    console.log(uma.message)
}
finally {
    console.log('This will always get executed')
}

// var output = getMessage("Hello", "Uma")
// console.log(output)


// try-catch-finally

try {
    var output = "Hello"
}
catch(uma) {
    console.log(uma.message)
}

finally {
    console.log('This will always get executed')
}