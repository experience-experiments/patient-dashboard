import express from 'express';
import {Server as createServer} from 'http';
import createSocketServer from 'socket.io';
import {allPatientIds} from './patient-data-feed';

const app = express();
const http = createServer(app);
const port = process.env.PORT || 3000;
const io = createSocketServer(http);

io.on('connection', (socket) => {
  console.log(`User connected. Socket id ${socket.id}`);
  socket.emit('watched-patients', allPatientIds());

  socket.on('disconnect', () => console.log('User disconnected, Socket id ${socket.id}'));
});

http.listen(port, () => console.log(`Patient Dashboard Server listening on port ${port}`));
