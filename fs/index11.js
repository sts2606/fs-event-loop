import { rmdir } from 'node:fs/promises';

console.log('start');

async function removeDirectory(dirPath) {
  try {
    await rmdir(dirPath);

    console.log(`Directory ${dirPath} has been deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting directory: ${dirPath}`, err);
  }
}

removeDirectory('./temp-directory');

console.log('end');
