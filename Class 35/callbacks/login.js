const simulateAsync = require("../utils/simulateAsync");

function login(user, callback) {
  simulateAsync(`2. User logged in: ${user.email}`, { token: "token_abc123", user }, callback);
}

module.exports = login;