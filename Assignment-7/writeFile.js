const fs = require('fs')

fs.writeFile(__dirname+"/readtext.txt","cat,cat,dog,rat,mat,rat",function(err){
    if(err) throw err;
    console.log("text")
})