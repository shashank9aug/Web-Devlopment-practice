const fs = require('fs')

fs.readFile("myfileoutside.txt",function(err,data){
    if (err) throw err;
    console.log(data)
    console.log(data.toString())
})
fs.readFile(__dirname+"/myfileinside.txt",function(err,data){
    if (err) throw err;
    console.log(data)
    console.log(data.toString())
})

//readFile and writeFile is asynchronous function so, neccessary to pass callbacks