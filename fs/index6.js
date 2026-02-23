import { readFile, writeFile, appendFile } from 'node:fs/promises';

console.log('start');

async function processFile() {
  try {
    const file = await readFile('./input.txt');

    await writeFile('./output.txt', file);

    await appendFile('./output.txt', '\nAppended text');

    console.log('file operations completed');
  } catch (err) {
    console.error('Error:', err);
  }
}

processFile();

console.log('end');
