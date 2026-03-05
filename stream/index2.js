import http from 'node:http';
import fs from 'node:fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = './files/index.html';

  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);
  }

  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      req.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');

      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
