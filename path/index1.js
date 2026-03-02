import path from 'path';

const filePath = 'Desktop/node/fs/file.txt';
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
const extName = path.extname(filePath);

console.log('Base Name:', baseName); // Output: file.txt
console.log('Directory Name:', dirName); // Output: Desktop/node/fs
console.log('Extension Name:', extName); // Output: .txt
