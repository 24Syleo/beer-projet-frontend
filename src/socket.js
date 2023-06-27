import { io } from 'socket.io-client';
import { hote } from './config/config.js';

const socket = io(hote, {
    autoConnect:false
});

export { socket };