import debug from 'debug';

const debugLog1 = debug('marker:1');
const debugLog2 = debug('marker:2');
const debugLog3 = debug('marker:3');

debugLog1('Debug message for marker:1');
debugLog2('Debug message for marker:2');
debugLog3('Debug message for marker:3');
