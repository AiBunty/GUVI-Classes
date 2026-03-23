const simulateAsync = require("../utils/simulateAsync");

function register(user, callback) {
  simulateAsync(`1. User registered: ${user.name}`, { userId: 1, ...user }, callback);
}

module.exports = register;