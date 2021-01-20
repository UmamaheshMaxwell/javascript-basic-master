/*===============================*/

// arraySum([1,2,3,4,5]) //15
// arraySum([1,2,3,4,5,6,7,8,9,10]) //55
// arraySum([1,2, 3, 'uma', 4, 5]) // 15
// arraySum([1,2, 3, 'uma', {'a' : 'uma'}, 4, 5]) // 15
// arraySum([1,2,[[3],4], 5]) // 15

function arraySum(array){
    var total = 0;

    for(var i =0; i<array.length; i++){
        if(typeof array[i] === 'number'){
            total += array[i]
        }
        else if (Array.isArray(array[i]))
        {
            total +=arraySum(array[i])
        }
    }
    return total;
}

console.log(arraySum([1,2,3,4,5]))
console.log(arraySum([1,2,3,4,5,6,7,8,9,10]))
console.log(arraySum([1,2, 3, 'uma', 4, 5]))
console.log(arraySum([1,2, 3, 'uma', {'a' : 'uma'}, 4, 5]))
console.log(arraySum([1,2,[[3],4], 5]))