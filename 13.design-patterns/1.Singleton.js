var Singleton = (function(){

    var instance = null;

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Instnace has been created')
        return obj;
    }

    return {
        getInstance : function(){
            if(!instance) {
                console.log('I am creating an instance')
                instance = createInstance();
            }
         return instance;
        }
    }
})()

var singleton1 = Singleton.getInstance();
console.log(singleton1)

var singleton2 = Singleton.getInstance();
console.log(singleton2)

var singleton3 = Singleton.getInstance();
console.log(singleton3)