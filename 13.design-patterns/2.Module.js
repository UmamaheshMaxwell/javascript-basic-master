// Private Methods ( methods which are not accessible outside)
var Module = (function(){

    var privateMethod = function(){
        
    }
    return {
        publicMethod1: function(){
            return "This is public method1"
        },
        publicMethod2: function(){
            return "This is public method2"
        },
        publicMethod3: function(){
            return "This is public method3"
    }
 }
})();

console.log(Module)

var Module = (function(){

    var privateMethod = function(){
        
    }

    var myObject= {

        publicMethod1: function(){
            return "This is public method1"
        },
        publicMethod2: function(){
           return "This is public method2"
       },
       publicMethod3:  function(){
           return "This is public method3"
       }
    };

 return  myObject
})();

console.log(Module)