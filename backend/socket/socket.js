import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
} 

const userSocketMap = {}; 

io.on("connection", (socket) => {
    console.log("usuário conectado", socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    //io.emit() envia eventos para todos os usuários conectados
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    //socket.on() acompanha os eventos e pode ser usado no lado dos clientes
    socket.on("disconnect", ()=>{
        console.log("user disconected", socket.id);
        delete userSocketMap[userId];
        console.log(userSocketMap)
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

    })

})


export {app, io, server};