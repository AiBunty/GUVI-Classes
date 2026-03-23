const flowData = require("../data/flowData");
const register = require("../promises/register");
const login = require("../promises/login");
const cart = require("../promises/cart");
const checkout = require("../promises/checkout");
const pay = require("../promises/pay");
const mail = require("../promises/mail");

async function runAsyncExample() {
  console.log("\nAsync/Await Example\n");

  try {
    const registeredUser = await register(flowData.user);
    const session = await login(registeredUser);
    const cartData = await cart(session, flowData.product);
    const order = await checkout(cartData);
    const payment = await pay(order);
    const response = await mail(payment);

    console.log("Async/Await Result:", response);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

module.exports = runAsyncExample;

if (require.main === module) {
  runAsyncExample();
}