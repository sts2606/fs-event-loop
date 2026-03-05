import { generateKeyPairSync } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

let algorithm = 'rsa';
let bits = 2048;

let keypair = generateKeyPairSync(algorithm, {
  modulusLength: bits,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

writeFileSync(
  join(process.cwd(), 'keys', 'private_key.pem'),
  keypair.privateKey,
);
writeFileSync(join(process.cwd(), 'keys', 'public_key.pem'), keypair.publicKey);
