import io from "socket.io-client";

const SOCKET_IO_URL = `http://158.220.115.182:3500`;
const socket = io(SOCKET_IO_URL);

export default socket;
