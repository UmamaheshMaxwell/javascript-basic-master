// console.log(this)

// function a(){
//     console.log(this)
//     this.newVariable = "Hello"
// }

// a();
// console.log(newVariable)

// var c = {
//     name : 'Uma',
//     log: function(){
//         this.name ="Johngalt"
//         console.log(this)
//     }
// }


var c = {
    name: 'uma',
    log: function(){
        console.log(this)
        var self=this;
            this.name ='Mahesh'
            console.log(self)

        var setName = function(newName){
            self.name = newName
            console.log(self)

        }

        setName('update')   
    }
}

c.log();