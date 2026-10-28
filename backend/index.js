import 'dotenv/config';
import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";

const options={};

const app = express();
const PORT = 3000;
const httpServer = createServer(app);
const socketServer = new Server(httpServer,options);

socketServer.on("connection", (socket) => {
  console.log("new socket connected with id: ",socket.id);

  socket.on()
});

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})

// socketServer.close();