function getValue(value){
    return value()
}

// var input = function(){
//     return 'I am callback function';
// }
console.log(getValue(function(){
    return 'I am callback function';
}))
