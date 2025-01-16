const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {origin: 'http://localhost:5173'}
})

io.on('connection', socket => {
    socket.on('set_user', userInfo => {
        socket.data.username = userInfo.name
        socket.data.chatRoom = userInfo.chatRoom
        
        console.log(`Usuário: ${socket.data.username} || id: ${socket.id} \nse conectou na sala ${socket.data.chatRoom}`)
        socket.join(socket.data.chatRoom)
    })

    socket.on('disconnect', reason => {
        if (socket.data.username){
            console.log(`Usuário ${socket.data.username} desconectou`, socket.id)
        }
    })

    socket.on('send_message', message => {
        io.to(socket.data.chatRoom).emit('receive_message', {
            message,
            authorId: socket.id,
            authorName: socket.data.username,
            chatRoom: socket.data.chatRoom
        })
    })
})

server.listen(8080, () => console.log('api rodando na porta 8080'))