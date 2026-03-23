const flowData = require("../data/flowData");
const register = require("../callbacks/register");
const login = require("../callbacks/login");
const cart = require("../callbacks/cart");
const checkout = require("../callbacks/checkout");
const pay = require("../callbacks/pay");
const mail = require("../callbacks/mail");

function runCallbackExample() {
  console.log("\nCallback Hell Example\n");

  register(flowData.user, (registerError, registeredUser) => {
    if (registerError) {
      console.error(registerError);
      return;
    }

    login(registeredUser, (loginError, session) => {
      if (loginError) {
        console.error(loginError);
        return;
      }

      cart(session, flowData.product, (cartError, cartData) => {
        if (cartError) {
          console.error(cartError);
          return;
        }

        checkout(cartData, (checkoutError, order) => {
          if (checkoutError) {
            console.error(checkoutError);
            return;
          }

          pay(order, (paymentError, payment) => {
            if (paymentError) {
              console.error(paymentError);
              return;
            }

            mail(payment, (mailError, response) => {
              if (mailError) {
                console.error(mailError);
                return;
              }

              console.log("Callback Hell Result:", response);
            });
          });
        });
      });
    });
  });
}

module.exports = runCallbackExample;

if (require.main === module) {
  runCallbackExample();
}