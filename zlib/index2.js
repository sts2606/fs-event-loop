import { createGzip } from 'node:zlib';
import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';

createServer((req, res) => {
  const gzip = createGzip();
  const index = createReadStream('./data/index.html');

  let acceptEncoding = req.headers['accept-encoding'] || '';

  if (Array.isArray(acceptEncoding)) {
    acceptEncoding = acceptEncoding.join(', ');
  }

  if (/\bgzip\b/.test(acceptEncoding)) {
    res.writeHead(200, { 'Content-Encoding': 'gzip' });
    index.pipe(gzip).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    index.pipe(res);
  }
}).listen(3000, () => {
  console.log('Server is listening on port 3000');
});
