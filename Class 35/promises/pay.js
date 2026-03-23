const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function pay(order) {
  return simulateAsyncPromise(`5. Payment processed for order: ${order.orderId}`, {
    paymentId: "pay_789",
    order,
  });
}

module.exports = pay;