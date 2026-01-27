// Calling the function BEFORE it is defined
greet(); 

function greet() {
    console.log("Hello! I was parin.");
}


// Accessing variable BEFORE it is declared behind the screens

console.log(userName); 
showHi();        

var userName = "parin";

function showHi() {
    console.log("Welcome to the Guvi!");

    
    // Calling the function before it appears in the code
Welcome(); 

function Welcome() {
    console.log("Hello! I am fully hoisted.");
}



// Function Expression hoisting example
try {
    SayHi(); // ❌ Result: TypeError: SayHi is not a function
} catch (e) {
    console.log("Error:", e.message);
}

var SayHi = function() {
    console.log("Hi there!");
};

SayHi(); // ✅ Result: "Hi there!" (Now it works)