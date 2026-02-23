import { mkdir } from 'node:fs/promises';

console.log('start');

async function createDirectory(dirPath) {
  try {
    await mkdir(dirPath, { recursive: true });

    console.log(`Directory ${dirPath} has been created successfully.`);
  } catch (err) {
    console.error(`Error creating directory: ${dirPath}`, err);
  }
}

createDirectory('./temp-directory');

console.log('end');
