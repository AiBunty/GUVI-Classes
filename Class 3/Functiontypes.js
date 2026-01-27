// // FunctionTypes
// // //  1. Function Declaration or named function

// // // A function declared with the 'function' keyword and a name

// // function calculateTotal(price, qty) {
// //     return price * qty;
// // }
// // console.log(calculateTotal(50, 3)); 


// // //  2. Function Expression... function stored in a variable

// // const calculatetax = function(amount) {
// //     return amount * 0.18
// // }
// // console.log(calculatetax(1000)); 


// // iife - Immediately Invoked Function Expression

// (function welcome() {
//     console.log("Welcome to the Jungle!");

// })()

// // named function expression... function with a name assigned to a variable

// const calculatetaxs = function taxCalc(amount) {
//     return amount * 0.18
// }
// console.log(calculatetaxs(1000));


// //annonymous function expression... function without a name assigned to a variable

// const calculateDiscount = function(amount) {
//     return amount * 0.1;
// }
// console.log(calculateDiscount(500));

// // higher order function... recursive function,arrow function, callback function



// //Write a program that declares a global variable and accesses it inside a function.
// // Global Scope example
// // Variable defined in the global scope
// const globalVar = "I am a global variable";

// function accessGlobalVar() {
//     // Accessing the global variable from within a function
//     console.log("Inside function: " + globalVar);
// }


// // Write a program where a variable declared inside a function cannot be accessed outside.
// accessGlobalVar(); // Output: Inside function: I am a global variable
// // Function Scope example
// function functionScopeExample() {
//     // This variable is function-scoped
//     var functionVar = "I am a function-scoped variable";    
//     console.log("Inside function: " + functionVar); // Accessible here
// }
// functionScopeExample();


// Write a program to demonstrate the difference between var and let inside an if block.
// // Attempting to access the variable outside the function
// try {
//     console.log("Outside function: " + functionVar);
// } catch (error) {
//     console.log("Result: ReferenceError: functionVar is not defined");
// }       




// // Write a program that shows block scope using let and const.

// const blockVar = "I am a block-scoped variable";
// if (true) {
//     // These variables are block-scoped to this 'if' statement
//     let letVar = "I am declared with let";
//     const constVar = "I am declared with const";    
//     console.log("Inside block - letVar:", letVar);    // Output: I am declared with let
//     console.log("Inside block - constVar:", constVar); // Output: I am declared with const
// }   


//Write a program that declares a variable inside a for loop and tries to access it outside the loop.
for (let i = 0; i < 3; i++) {
    console.log("Inside loop:", i); // Output: 0, 1, 2
}       
// Attempting to access 'i' outside the loop
try {
    console.log("Outside loop:", i);
} catch (e) {
    console.log("Result: ReferenceError: i is not defined");
}

// Output: ReferenceError: i is not defined











