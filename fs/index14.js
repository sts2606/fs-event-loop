import { readdir, stat } from 'node:fs/promises';

console.log('start');

async function listFiles(dirPath) {
  try {
    const files = await readdir(dirPath);

    for (const file of files) {
      const filePath = `${dirPath}/${file}`;
      const fileInfo = await stat(filePath);

      if (fileInfo.isDirectory()) {
        await listFiles(filePath);
      } else {
        console.log(filePath.replace('//', '/'));
      }
    }
  } catch (err) {
    console.error(`Error listing files in directory: ${dirPath}`, err);
  }
}

listFiles('../');

console.log('end');
