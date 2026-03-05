import { pbkdf2Sync, pbkdf2 } from 'node:crypto';

const algorithm = 'sha256';
const text = 'Hello world';
const salt = 'another_salt';
const iterations = 150000;
const keylen = 128;

pbkdf2(text, salt, iterations, keylen, algorithm, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});

const verifyPassword = (
  inputPassword,
  storedHash,
  salt,
  iterations = 150000,
  keylen = 128,
  algorithm = 'sha256',
) => {
  let potentialHash = pbkdf2Sync(
    inputPassword,
    salt,
    iterations,
    keylen,
    algorithm,
  );

  return potentialHash.toString('hex') === storedHash;
};

console.log(
  verifyPassword(
    'Hello world',
    '255f50131bd1acc26209cebedab69a1ba5b94d82ccd81307a8cecaeb8a9fb9c2877e56ecb9263fe09a2257c3f57f535b920f690129cffb214ef267f4b16b419f21622bf8173c323d436139db5c88107ebc41aa8e61b3260410e0cd5226f202d043d92a46e35ae93160a5b5b0616fe415e7d7b8db9bfbe9f3ec7ed002f2ac2a33',
    'another_salt',
  ),
);
