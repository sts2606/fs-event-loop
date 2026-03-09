import { createGzip } from 'node:zlib';
import { createWriteStream } from 'node:fs';
import { get } from 'node:http';

const photoWritableStream = createWriteStream('./data/photos.json.gz');

get('http://jsonplaceholder.typicode.com/photos', (response) => {
  response.pipe(createGzip()).pipe(photoWritableStream);
});
