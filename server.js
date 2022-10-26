//basic imports
const express =require("express");
const path= require("path");
const http=require("http");
const socketio =require("socket.io");

//variables
const app=express();
const server=http.createServer(app);
const io= socketio(server);
app.use(express.static(path.join(__dirname,"public")));

io.on('connection',socket=>{console.log("new websocket!!!");
socket.emit("message","Welcome in!!!");
socket.broadcast.emit("message","a user just hopped in!!!");
socket.on('disconnect',()=>{
io.emit("message","user left the chat!!");
});


socket.on('chatmessage',msg=>{io.emit('message',msg);
});
});

const PORT=3000|| process.env.PORT;
server.listen(PORT,()=>{console.log(`service running on port ${PORT}`)});