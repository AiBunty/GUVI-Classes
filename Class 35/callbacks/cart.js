const simulateAsync = require("../utils/simulateAsync");

function cart(session, product, callback) {
  simulateAsync(
    `3. Product added to cart: ${product.name}`,
    { cartId: 501, session, product },
    callback
  );
}

module.exports = cart;