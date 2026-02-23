import { unlink } from 'node:fs/promises';

console.log('start');

async function deleteFile(filePath) {
  try {
    await unlink(filePath);

    console.log(`File deleted successfully: ${filePath}`);
  } catch (err) {
    console.error(`Error deleting file: ${filePath}`, err);
  }
}

deleteFile('./output.txt');

console.log('end');
