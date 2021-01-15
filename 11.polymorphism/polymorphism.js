function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle
function Circle(){

}

// polymorphism
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am a circle"
}

// Square
function Square(){

}

// polymorphism
Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
    return "I am a Square"
}

// Triangle

function Triangle(){

}

Triangle.prototype = Object.create(Shape.prototype)

// Triangle.prototype.draw = function(){
//     return "I am a Triangle"
// }

const shapes = [new Shape(), 
                new Circle(), 
                new Square(), 
                new Triangle()];

shapes.forEach(function(shape){
    console.log(shape.draw())
})