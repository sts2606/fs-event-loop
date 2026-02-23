import fs from 'fs';

console.log('start');

fs.readFile('./input.txt', (err, file) => {
  if (err) {
    throw err;
  }

  fs.writeFile('./output.txt', file, (err) => {
    if (err) {
      throw err;
    }

    fs.appendFile('./output.txt', '\n\n\nAppended text', (err) => {
      if (err) {
        throw err;
      }
    });
  });
});

console.log('end');
