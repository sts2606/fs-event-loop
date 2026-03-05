process.stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') {
    console.log('Exiting the program.');

    process.exit(0);
  }

  console.log(`Received chunk: ${chunk}`);
});
