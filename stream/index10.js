import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';

const main = async () => {
  const source = fs.createReadStream('./files/source.txt');
  const destination = fs.createWriteStream('./files/source_copy.txt');

  try {
    await pipeline(source, destination);

    console.log('Pipeline succeeded.');
  } catch (err) {
    console.error('Pipeline failed.', err);
  }
};

main();
