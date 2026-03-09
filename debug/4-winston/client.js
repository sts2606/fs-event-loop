import { Socket } from 'node:net';

let counter = 0;

const client = new Socket();

client.connect(3000, () => {
  console.log('Connected to server');

  client.write('Hello message #1');

  setTimeout(() => {
    client.write('Hello message #2 after 2 seconds');
  }, 2000);
});

client.on('data', (data) => {
  counter++;

  console.log('Received from server:', data.toString().trim());

  if (counter === 2) {
    client.destroy();
  }
});

client.on('end', () => {
  console.log('Disconnected from server');
});
