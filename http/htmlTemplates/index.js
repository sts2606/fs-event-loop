import { jsonTodos } from '../JSONTemplates/index.js';

const generateHTML = (htmlContent) => {
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>HTTP Server</title>
          </head>
          <body>
            <div>
              ${htmlContent}
            </div>
          </body>
          </html>
`;
};

export const rootTemplate =
  generateHTML(`<h1>Welcome to Node.js HTTP Server!</h1>
      <p>This is a simple HTTP server built with Node.js.</p>`);

export const template404 = generateHTML(`<h1>Page is not found</h1>`);

export const formTemplate = generateHTML(`<h1>Submit JSON Data</h1>
      <form action="/json" method="POST">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title">
        </div>
        <div>
          <label for="userId">User ID:</label>
          <input type="text" id="userId" name="userId">
        </div>
        <div>
          <label for="id">ID:</label>
          <input type="text" id="id" name="id">
        </div>
        <div>
          <label for="completed">Completed:</label>
          <input type="checkbox" id="completed" name="completed">
        </div>

        <button type="submit">Submit</button>
      </form>`);

export const todosTemplate = () => {
  const listItems = jsonTodos
    .map(
      (todo) =>
        `<li>
    <strong>${todo.title}</strong> (User ID: ${todo.userId}, ID: ${todo.id}) - Completed: ${todo.completed}
    </li>`,
    )
    .join('');

  return generateHTML(`<h1>Todo List</h1><ul>${listItems}</ul>`);
};
