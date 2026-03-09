import { createServer } from 'node:net';
import debug from 'debug';
import winston from 'winston';

const server = createServer();

const debugData = debug('server:data');
const debugListening = debug('server:listening');
const debugConnection = debug('server:connection:connect');
const debugDisconnection = debug('server:connection:disconnect');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  defaultMeta: { service: 'server' },
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
    }),
  ],
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

server.on('connection', (socket) => {
  debugConnection('Client connected');

  socket.setEncoding('utf-8');

  socket.on('data', async (data) => {
    debugData(`Received data: ${data.trim()}`);

    await delay(1000);

    logger.info(`Received data: ${data.trim()}`);

    socket.write(`${data}`);
  });

  socket.on('end', () => {
    debugDisconnection('Client disconnected');
  });
});

server.on('listening', () => {
  const { port } = server.address();

  logger.debug(`Server is listening on port ${port}`);

  debugListening(`Server is listening on port ${port}`);
});

server.listen(3000);
