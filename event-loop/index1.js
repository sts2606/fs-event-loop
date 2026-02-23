console.log('Start');

setTimeout(() => {
  console.log('Timeout in 2 seconds');
}, 2000);

let counter = 0;

const intervalId = setInterval(() => {
  console.log(`Interval 1s. Interval count: ${counter}`);
  counter++;

  if (counter === 5) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);

console.log('End');
