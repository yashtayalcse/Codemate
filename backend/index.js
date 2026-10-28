import 'dotenv/config';
import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import HandleClientConnection from './src/controllers/HandleClientConnection.controller.js';

const options={};

const PORT = 3000;
const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer,options);

//express app endpoints, i will add here if any

socketServer.on("connection", (socket)=>HandleClientConnection(socket));

httpServer.listen(PORT, ()=>{
  console.log(`httpServer & socketServer are running on port ${PORT}`);
})