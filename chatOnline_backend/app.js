const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {origin: 'http://localhost:5173'}
})

server.listen(8080, () => console.log('api rodando na porta 8080'))