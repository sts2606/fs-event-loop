import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// const path = require('path');

// In ESM there is no built-in __dirname or __filename. Construct them manually:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = '/Desktop/node';
const fileName = 'fs/input.txt';

const fullPath = path.join(baseDir, fileName);
const fullCurrentPath = path.join(__dirname, fileName);

console.log('Full Path:', fullPath);
console.log('Full Current Path:', fullCurrentPath);
