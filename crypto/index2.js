import { publicEncrypt } from 'node:crypto';
import { writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const publicKey = readFileSync(
  join(process.cwd(), 'keys', 'public_key.pem'),
  'utf-8',
);

const data = 'Hello, World!';

const encryptedData = publicEncrypt(publicKey, Buffer.from(data));

writeFileSync(
  join(process.cwd(), 'files', 'encrypted_data.txt'),
  encryptedData,
);

console.log('Encrypted', encryptedData.toString());
