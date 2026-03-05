import { Transform } from 'node:stream';

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk.toString().toUpperCase();

    callback(null, upperCaseChunk);
  },
});

process.stdin.pipe(toUpperCase).pipe(process.stdout);
