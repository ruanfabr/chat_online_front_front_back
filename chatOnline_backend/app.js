const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {origin: 'http://localhost:5173'}
})

io.on('connection', socket => {
    console.log('Usuário conectado', socket.id)

    socket.on('set_username', username => {
        socket.data.username = username

        console.log(socket.data.username)
    })

    socket.on('disconnect', reason => {
        console.log(`Usuário ${socket.data.username} desconectou`, socket.id)
    })
})

server.listen(8080, () => console.log('api rodando na porta 8080'))