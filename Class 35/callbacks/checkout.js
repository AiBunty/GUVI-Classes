const simulateAsync = require("../utils/simulateAsync");

function checkout(cart, callback) {
  simulateAsync(`4. Checkout created for cart: ${cart.cartId}`, { orderId: 9001, cart }, callback);
}

module.exports = checkout;