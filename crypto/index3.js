import { privateDecrypt } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const privateKey = readFileSync(
  join(process.cwd(), 'keys', 'private_key.pem'),
  'utf-8',
);

const encryptedData = readFileSync(
  join(process.cwd(), 'files', 'encrypted_data.txt'),
);

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log('Decrypted', decryptedData.toString());
