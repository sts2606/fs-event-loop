import debug from 'debug';
import chalk from 'chalk';

const debugLog = debug('marker');

debugLog('Debug message started');

console.log(chalk.green('Message'), chalk.bgGreenBright('Hello from node.js!'));

console.log(
  chalk.red('process.env.DEBUG'),
  chalk.bgRedBright(process.env.DEBUG),
);

debugLog('Debug message finished');
