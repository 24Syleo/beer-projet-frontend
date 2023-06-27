import socketClient from 'socket.io-client';
import { hote } from './config/config.js';

const socket = socketClient(hote,{});

export { socket };