import { scryptSync, createCipheriv } from 'node:crypto';

const algorithm = 'aes-192-cbc';
const pass = 'zaaqwer1234567';
const key = scryptSync(pass, 'salt', 24);
const iv = Buffer.alloc(16, 0);

const cipher = createCipheriv(algorithm, key, iv);

let encrypted = cipher.update(JSON.stringify([{ name: 'John', age: 25 }]));

encrypted += cipher.final('hex');

console.log(encrypted);
