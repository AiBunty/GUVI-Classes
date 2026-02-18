// Callback functions are functions that are passed as arguments to other functions and are executed after some operation is completed.
// They are commonly used in asynchronous programming to handle events or perform actions after a certain task is finished.

// Example of a callback function

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;   
}

function multiply(a, b) {
    return a * b;   
 

}

// Create the common function to handle all operation

function calculate(a, b, arithmeticOperation) {
    return arithmeticOperation(a, b);
}

// Example usage of the calculate function with different operations
console.log(calculate(5, 3, add));       // Output: 8
console.log(calculate(5, 3, subtract));  // Output: 2
console.log(calculate(5, 3, multiply));  // Output: 15  

