const fs = require('fs')

fs.readFile(__dirname+"/readtext.txt",function(err,data){
    if(err) throw err;
    console.log(data.toString());
    
    const i=function(data){
      console.log((data.match(/cat/g)).length);
    }
    

    // fs.writeFile(__dirname+"/output.txt",instance,function(err){
    //     if(err) throw err;
    
    //     console("output the file")
    // })
})



