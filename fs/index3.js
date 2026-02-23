import fs from 'fs';

console.log('start');

fs.readFile('./input.txt', (err, file) => {
  console.log('file read callback');
  if (err) {
    throw err;
  }

  fs.writeFile('./output.txt', file, (err) => {
    console.log('file write callback');
    if (err) {
      throw err;
    }
  });
});

console.log('end');
