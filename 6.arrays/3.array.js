var data = [
             1,
             "uma",
             true,
             undefined,
             null,
             {name: 'uma', city: 'hyd'},
             function(name){
                 return name
             },
             ["red", "blue", "green"]
           ]

console.log(data)

console.log(data[7][1])
console.log(data[5].name)
console.log(data[6](data[5].name))


