import { createGunzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

const photoReadableStream = createReadStream('./data/photos.json.gz');
const photoWritableStream = createWriteStream('./data/photos.json');

const gunzip = createGunzip();

photoReadableStream.pipe(gunzip).pipe(photoWritableStream);
