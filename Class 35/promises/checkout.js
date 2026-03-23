const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function checkout(cart) {
  return simulateAsyncPromise(`4. Checkout created for cart: ${cart.cartId}`, {
    orderId: 9001,
    cart,
  });
}

module.exports = checkout;
