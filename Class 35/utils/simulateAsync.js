function simulateAsync(label, result, callback) {
  setTimeout(() => {
    console.log(label);
    callback(null, result);
  }, 400);
}

module.exports = simulateAsync;
