import zlib from 'zlib';
import { promisify } from 'util';

const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);

async function compressAndDecompress() {
  const originalString = 'Наші секретні дані, які потребують стиснення';
  console.log(`Оригінальний рядок: ${originalString}`);

  const compressed = await gzip(originalString);
  console.log(`Стиснені дані: ${compressed.toString('base64')}`);

  const decompressed = await gunzip(compressed);
  console.log(`Розпакований рядок: ${decompressed.toString()}`);
}

compressAndDecompress().catch(console.error);
