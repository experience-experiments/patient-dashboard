const express = require('express');
const createHTTPServer = require('http').Server;
const createSocketServer = require('socket.io');
const patientDataFeed = require('./patient-data-feed');

const app = express();
const http = createHTTPServer(app);
const port = process.env.PORT || 3000;
const io = createSocketServer(http);

// Serve index.html to document API
app.use(express.static('entrypoint'));

io.on('connection', (socket) => {
  console.log(`User connected. Socket id ${socket.id}`);

  const onPatientUpdate = (patientUpdate) => socket.emit('patient-update', patientUpdate);
  const initialPatientList = patientDataFeed.subscribe(onPatientUpdate);

  socket.emit('patient-update', initialPatientList);

  socket.on('disconnect', () => console.log(`User disconnected, Socket id ${socket.id}`));
});

patientDataFeed.startSimulation();

http.listen(port, () => console.log(`Patient Dashboard Server listening on port ${port}`));
