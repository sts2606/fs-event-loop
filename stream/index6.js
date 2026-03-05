import fs from 'node:fs';

const filePath = './files/index.txt';
const writeStream = fs.createWriteStream(filePath);

process.stdin.pipe(writeStream);
