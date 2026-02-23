const fs = require('fs');

console.log('start');

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

setTimeout(() => {
  console.log('setTimeout 2');
}, 20);

setImmediate(() => {
  console.log('setImmediate');
});

Promise.resolve().then(() => {
  console.log('promise');
});

process.nextTick(() => {
  console.log('nextTick');
});

fs.writeFile('./output.txt', 'Hello, World!', () => {
  console.log('File written successfully');
});

console.log('end');
