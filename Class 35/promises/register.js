const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function register(user) {
  return simulateAsyncPromise(`1. User registered: ${user.name}`, {
    userId: 1,
    ...user,
  });
}

module.exports = register;