import {
  publicEncrypt,
  privateDecrypt,
  createSign,
  createVerify,
} from 'node:crypto';
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

const text = 'Hello, World!';

const encryptedData = publicEncrypt(publicKey, Buffer.from(text));

const signExemplar = createSign('SHA256');
signExemplar.update(encryptedData);

const signature = signExemplar.sign(privateKey);

writeFileSync(
  join(process.cwd(), 'files', 'encrypted_data.txt'),
  encryptedData,
);

writeFileSync(join(process.cwd(), 'files', 'signature.txt'), signature);

const encryptedDataFromFile = readFileSync(
  join(process.cwd(), 'files', 'encrypted_data.txt'),
);
const signatureFromFile = readFileSync(
  join(process.cwd(), 'files', 'signature.txt'),
);

const verify = createVerify('SHA256');
verify.update(encryptedDataFromFile);

const isVerified = verify.verify(publicKey, signatureFromFile);

if (isVerified) {
  const decryptedData = privateDecrypt(privateKey, encryptedData);
  console.log('Decrypted', decryptedData.toString());
} else {
  console.log(
    'Signature verification failed. Data may have been tampered with.',
  );
}
