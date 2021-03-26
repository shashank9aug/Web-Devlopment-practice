const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(__dirname+'/public'))

//to connect with server 
io.on('connection',(socket)=>{
    console.log('connection',socket.id)
})

server.listen(4646,()=>{
    console.log('server started on http://localhost:4646')      
})


//All the client side socket code will available on: http://localhost:4646/socket.io/socket.io.js

//client side and server side must have same id

//Without refreshing the page it updated it's id as client side is waiting for making connection
