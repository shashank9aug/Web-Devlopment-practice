const express = require('express')

const app = express()

app.get('/hello',(req,res)=>{
    let name='Guest'

    if(req.query.user){name = req.query.user} 

    res.send('Hello world'+name)
})

//this will return the path of public folder
//console.log(__dirname+'/public')

app.use('/xyz',express.static(__dirname+'/public'))

app.listen(4342,()=>{
    console.log('server started at https://localhost:4342')

})



