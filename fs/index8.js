import { writeFile, rename } from 'node:fs/promises';

console.log('start');

async function createAndRenameFile(sourcePath, destPath) {
  try {
    await writeFile(sourcePath, 'This is a temporary file.');

    await rename(sourcePath, destPath);

    console.log(`File created and renamed successfully: ${destPath}`);
  } catch (err) {
    console.error(`Error creating or renaming file:`, err);
  }
}

createAndRenameFile('./temp.txt', './target.txt');

console.log('end');
