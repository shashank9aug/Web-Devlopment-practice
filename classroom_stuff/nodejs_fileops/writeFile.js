//we will use node js system library
//there is FS api in node js to access file system
//fs.writeFile(file,date[,options],data)

const fs = require('fs')


// fs.writeFile('myFile.txt',"some data",function(err){
//     if(err) throw err

//     console.log("My File was written")
// })

//simply file will be created outside the folder but when we will use
//__dirname we will get the file inside our directory folder

fs.writeFile(__dirname+'/myFile.txt',"some data",function(err){
    if(err) throw err

     console.log("My File was written")
})
