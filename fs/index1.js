import fs from 'fs';

// No errors handled
// console.log('start');

// const file = fs.readFileSync('./input.txt');

// console.log('Buffer:', file);
// console.log('String:', file.toString());

// console.log('end');

// With error handling
console.log('start');

try {
  const file = fs.readFileSync('./input.txt');
  console.log('Buffer:', file);
  console.log('String:', file.toString());
} catch (err) {
  console.error('Error reading file:', err);
}

console.log('end');
