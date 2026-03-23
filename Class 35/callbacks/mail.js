const simulateAsync = require("../utils/simulateAsync");

function mail(payment, callback) {
  simulateAsync(
    `6. Confirmation mail triggered for payment: ${payment.paymentId}`,
    { success: true, payment },
    callback
  );
}

module.exports = mail;