const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function login(user) {
  return simulateAsyncPromise(`2. User logged in: ${user.email}`, {
    token: "token_abc123",
    user,
  });
}

module.exports = login;