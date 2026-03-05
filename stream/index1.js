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
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
