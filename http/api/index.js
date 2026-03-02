import {
  rootTemplate,
  template404,
  formTemplate,
  todosTemplate,
} from '../htmlTemplates/index.js';
import { jsonTodos } from '../JSONTemplates/index.js';
import querystring from 'querystring';

export const generateRootResponse = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  return response.end(rootTemplate);
};

export const generateNotFoundResponse = (request, response) => {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/html');
  return response.end(template404);
};

export const generateTextResponse = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  return response.end('This is plain text content.');
};

export const generateJSONResponse = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  return response.end(JSON.stringify(jsonTodos));
};

export const generateFormResponse = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  return response.end(formTemplate);
};

export const postJSONResponse = (request, response) => {
  if (request.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let todo;

    request.on('data', (chunk) => {
      const body = querystring.parse(chunk.toString());

      todo = {
        userId: +body.userId,
        id: +body.id,
        title: body.title,
        completed: body.completed === 'on',
      };
    });

    request.on('end', () => {
      jsonTodos.push(todo);
    });

    response.statusCode = 201;
    response.setHeader('Content-Type', 'text/html');
    return response.end(todosTemplate());
  }

  if (request.headers['content-type'] === 'application/json') {
    try {
      request.on('data', (chunk) => {
        const data = JSON.parse(chunk);
        jsonTodos.push(data);
      });

      request.on('end', () => {
        response.statusCode = 201;
        response.setHeader('Content-Type', 'application/json');
        return response.end(JSON.stringify(jsonTodos));
      });
    } catch (error) {
      response.statusCode = 400;
      response.setHeader('Content-Type', 'text/plain');
      return response.end('Bad Request: Invalid JSON');
    }
  } else {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/plain');
    return response.end('Bad Request: Content-Type must be application/json');
  }
};
