const fs = require('fs')

// fs.readFile(__dirname+'/myFile.txt',function(err,data){
//     if(err) throw err

//     console.log(data)
// })

//<Buffer 73 6f 6d 65 20 64 61 74 61> output
//the Buffer is data which comes from out file myfile.txt in the form of binary
//Buffer is way to read data from file

fs.readFile(__dirname+'/myFile.txt',function(err,data){
    if(err) throw err

    console.log(data.toString())
})

//some data