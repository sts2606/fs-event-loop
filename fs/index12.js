import { stat } from 'node:fs/promises';

console.log('start');

async function getFileInfo(filePath) {
  try {
    const stats = await stat(filePath);

    console.log(stats);

    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(
      `Created: ${stats.birthtime}, ${new Date(stats.birthtime).toLocaleString()}`,
    );
    console.log(`Modified: ${stats.mtime}`);
  } catch (err) {
    console.error(`Error getting file info: ${filePath}`, err);
  }
}

getFileInfo('./input.txt');
getFileInfo('./nonexistent.txt');

console.log('end');
