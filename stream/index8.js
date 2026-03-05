process.stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') {
    console.log('Exiting the program.');

    process.stdin.pause();
  }

  console.log(`Received chunk: ${chunk}`);
});
