// import path from 'path';
const path = require('path');

const path1 = 'Desktop/node/fs/input.txt';
const path2 = '/Users/a1/Desktop/hillel/node/fs/input.txt';

console.log(path.isAbsolute(path1));
console.log(path.isAbsolute(path2));
