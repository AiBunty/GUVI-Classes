function simulateAsyncPromise(label, result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(label);
      resolve(result);
    }, 400);
  });
}

module.exports = simulateAsyncPromise;
