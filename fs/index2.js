import fs from 'fs';

console.log('start');

fs.readFile('./input.txt', (err, file) => {
  if (err) {
    throw err;
  }

  console.log('Buffer:', file);
  console.log('String:', file.toString());
});

console.log('end');
