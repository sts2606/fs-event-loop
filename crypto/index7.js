import { createHash } from 'node:crypto';

const algorithm = 'sha256';
const text = 'Hello world';

const hash = createHash(algorithm);

hash.update(text);

const encrypted = hash.digest('hex');

console.log('Encrypted:', encrypted);
