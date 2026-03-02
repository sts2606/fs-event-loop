import http from 'node:http';

import {
  generateNotFoundResponse,
  generateRootResponse,
  generateTextResponse,
  generateJSONResponse,
  postJSONResponse,
  generateFormResponse,
} from './api/index.js';

const PORT = 3000;

const server = http.createServer((request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    return generateRootResponse(request, response);
  }

  if (request.url === '/text' && request.method === 'GET') {
    return generateTextResponse(request, response);
  }

  if (request.url === '/json' && request.method === 'GET') {
    return generateJSONResponse(request, response);
  }

  if (request.url === '/json' && request.method === 'POST') {
    return postJSONResponse(request, response);
  }

  if (request.url === '/form' && request.method === 'GET') {
    return generateFormResponse(request, response);
  }

  generateNotFoundResponse(request, response);
});

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
