import { publicEncrypt, privateDecrypt } from 'node:crypto';
import { writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const publicKey = readFileSync(
  join(process.cwd(), 'keys', 'public_key.pem'),
  'utf-8',
);
const privateKey = readFileSync(
  join(process.cwd(), 'keys', 'private_key.pem'),
  'utf-8',
);

const text = 'Hello world';

const encryptedData = publicEncrypt(publicKey, Buffer.from(text));

writeFileSync(
  join(process.cwd(), 'files', 'encrypted_data.txt'),
  encryptedData,
);

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log('Decrypted', decryptedData.toString());
