const path = require('path');

const relativeFilePath = 'fs//input.txt';

const normalizedPath = path.normalize(relativeFilePath);

console.log('Normalized Path:', normalizedPath);

const absoluteFilePath = path.resolve(relativeFilePath);

console.log('Absolute File Path:', absoluteFilePath);

const normalizedAbsoluteFilePath = path.resolve(normalizedPath);

console.log('Normalized Absolute File Path:', normalizedAbsoluteFilePath);
