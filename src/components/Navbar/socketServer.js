import io from "socket.io-client";

const IP_ADDRESS = "192.168.1.5";
const SOCKET_IO_URL = `http://${IP_ADDRESS}:3500`;
const socket = io(SOCKET_IO_URL);

export default socket;
