import { access, constants } from 'node:fs/promises';

console.log('start');

let isAccessible = false;

async function checkFileAccess(filePath) {
  try {
    await access(filePath, constants.F_OK);

    isAccessible = true;

    console.log(`File exists: ${filePath}`);
  } catch (err) {
    isAccessible = false;
    console.error(`Error accessing file: ${filePath}`, err);
  }
}

await checkFileAccess('./input.txt');
await checkFileAccess('./nonexistent.txt');

console.log('end', { isAccessible });
