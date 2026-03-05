import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import { createGzip } from 'node:zlib';

const main = async () => {
  const source = fs.createReadStream('./files/source.txt');
  const gzip = createGzip();
  const destination = fs.createWriteStream('./files/source_copy.txt.gz');

  try {
    await pipeline(source, gzip, destination);

    console.log('Pipeline succeeded.');
  } catch (err) {
    console.error('Pipeline failed.', err);
  }
};

main();
