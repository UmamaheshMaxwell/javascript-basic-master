try {
    throw "Error Occured"
} catch (ex) {
    console.log(ex)
}

try {
    throw {
        number : 101,
        message: 'This id is duplicated'
    }
} catch (ex) {
    console.log(ex.number, ex.message)
}