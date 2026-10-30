import { io } from "socket.io-client";
import ConnectionController from "../controllers/socket.connect.controller";

//io method returns a socket instance, for namespace provided in pathname, defaulting to '/'
const socket = io("http://localhost:3000",
  {
  reconnectionDelayMax: 5000,
  autoConnect: false
  }
)
socket.connect();
console.log(socket.connected); // true

console.log("socket: ",socket)

//connection and reconnection pe fire hoga
socket.on("connect", ConnectionController(socket))







