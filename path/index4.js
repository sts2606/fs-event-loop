const path = require('path');

const path1 = 'Desktop/hillel/node';
const path2 = 'Desktop/hillel/node/fs/input.txt';

const relativePath = path.relative(path1, path2);

console.log('Relative Path:', relativePath); // Output: input.txt
