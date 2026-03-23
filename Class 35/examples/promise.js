const flowData = require("../data/flowData");
const register = require("../promises/register");
const login = require("../promises/login");
const cart = require("../promises/cart");
const checkout = require("../promises/checkout");
const pay = require("../promises/pay");
const mail = require("../promises/mail");

function runPromiseExample() {
  console.log("\nPromise Chaining Example\n");

  return register(flowData.user)
    .then((registeredUser) => login(registeredUser))
    .then((session) => cart(session, flowData.product))
    .then((cartData) => checkout(cartData))
    .then((order) => pay(order))
    .then((payment) => mail(payment))
    .then((response) => {
      console.log("Promise Chaining Result:", response);
    })
    .catch((error) => {
      console.error("Promise Chaining Error:", error);
    });
}

module.exports = runPromiseExample;

if (require.main === module) {
  runPromiseExample();
}