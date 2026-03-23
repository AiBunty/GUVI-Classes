const simulateAsyncPromise = require("../utils/simulateAsyncPromise");

function cart(session, product) {
  return simulateAsyncPromise(`3. Product added to cart: ${product.name}`, {
    cartId: 501,
    session,
    product,
  });
}

module.exports = cart;