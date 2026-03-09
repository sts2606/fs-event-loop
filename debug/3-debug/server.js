import { createServer } from 'node:net';
import debug from 'debug';

const server = createServer();

const debugData = debug('server:data');
const debugListening = debug('server:listening');
const debugConnection = debug('server:connection:connect');
const debugDisconnection = debug('server:connection:disconnect');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

server.on('connection', (socket) => {
  debugConnection('Client connected');

  socket.setEncoding('utf-8');

  socket.on('data', async (data) => {
    debugData(`Received data: ${data.trim()}`);

    await delay(1000);

    socket.write(`${data}`);
  });

  socket.on('end', () => {
    debugDisconnection('Client disconnected');
  });
});

server.on('listening', () => {
  const { port } = server.address();
  debugListening(`Server is listening on port ${port}`);
});

server.listen(3000);
