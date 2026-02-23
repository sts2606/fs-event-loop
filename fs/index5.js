import { readFile, writeFile, appendFile } from 'node:fs/promises';

console.log('start');

readFile('./input.txt')
  .then((file) => {
    writeFile('./output.txt', file);
  })
  .then(() => {
    appendFile('./output.txt', '\nAppended text');
  })
  .catch((err) => {
    console.error('Error:', err);
  })
  .finally(() => {
    console.log('file operations completed');
  });

console.log('end');
