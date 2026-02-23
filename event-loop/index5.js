let bar;

function someAsyncOperation(callback) {
  callback();

  process.nextTick(callback);
}

someAsyncOperation(() => {
  console.log('bar:', bar);
});

bar = 1;
