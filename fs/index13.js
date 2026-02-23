import { readdir } from 'node:fs/promises';

console.log('start');

async function listFiles(dirPath) {
  try {
    const files = await readdir(dirPath);

    console.log(`Files in directory ${dirPath}: ${files}`);
  } catch (err) {
    console.error(`Error listing files in directory: ${dirPath}`, err);
  }
}

listFiles('./');

console.log('end');
