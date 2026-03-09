export function getData() {
  return new Promise((resolve) => {
    setTimeout(
      resolve({
        name: 'John',
        age: 30,
      }),
      1000,
    );
  });
}
