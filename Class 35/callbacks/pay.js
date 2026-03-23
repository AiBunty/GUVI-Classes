const simulateAsync = require("../utils/simulateAsync");

function pay(order, callback) {
  simulateAsync(
    `5. Payment processed for order: ${order.orderId}`,
    { paymentId: "pay_789", order },
    callback
  );
}

module.exports = pay;