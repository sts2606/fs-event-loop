const path = require('path');

const pathParts = {
  root: '',
  dir: '/Desktop/hillel/node/fs',
  base: 'input.txt',
  ext: '.txt',
  name: 'input',
};

const filePath = path.win32.format(pathParts);

const filePosixPath = path.posix.format(pathParts);

console.log('Windows:', filePath, 'Common:', filePosixPath);
