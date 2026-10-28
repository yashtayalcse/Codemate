import { io } from "socket.io-client";
import ConnectionController from "../controllers/socket.connect.controller";

const socket = io("http://localhost:3000",
  {
  reconnectionDelayMax: 10000,
  }
)
console.log("socket: ",socket)

//connection and reconnection pe fire hoga
socket.on("connect", ConnectionController)







