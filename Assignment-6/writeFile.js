const fs = require ('fs')

fs.writeFile('myfileoutside.txt',"some data outside directory",function(err){
    if(err){
        throw err;
    }else{
        console.log("file was written")
    }
})
fs.writeFile(__dirname+'/myfileinside.txt',"some data inside directory",function(err){
    if(err){
        throw err;
    }else{
        console.log("file was written")
    }
})
