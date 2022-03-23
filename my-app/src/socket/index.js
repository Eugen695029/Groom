import {io} from 'socket.io-client';

const options = {
    "force new connection": true,
    reconnectionAttemps: "Infinity",
    timeout: 10000,
    transports: ["wedsocket"]
}

const socket = io('http://localhost:3001',options);

export default socket;