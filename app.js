const express = require('express')
const app = express()

app.use(express.static("public"))

const server = app.listen(3000,()=>console.log("Server running on port 3000"))

//Setting server for socket connection
const socket = require('socket.io')
const io = socket(server)   

/*
Now socket.io will be listening on this server and waiting for the client  to connect and then it will establish 
a socket connection with the client
*/

io.on('connection',socket=>{
    console.log("Made Socket Connection.")

    socket.on('message',(data)=>{
        console.log(data)
        socket.broadcast.emit('message', data);
    })
})

