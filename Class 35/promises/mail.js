const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function mail(payment) {
  return simulateAsyncPromise(
    `6. Confirmation mail triggered for payment: ${payment.paymentId}`,
    { success: true, payment }
  );
}

module.exports = mail;