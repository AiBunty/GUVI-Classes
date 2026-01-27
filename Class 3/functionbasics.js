
//Example of parameters... passing data to functions
// 'name' is the parameter (placeholder)
function welcome(name) {
    console.log("Hello, " + name + "! Welcome to the team.");
}

// "Alex" and "Jordan" are the arguments (actual data)
welcome("Alex");   // Output: Hello, Alex! Welcome to the team.
welcome("Jordan"); // Output: Hello, Jordan! Welcome to the team.


function add(a, b){
    console.log(a + b);
}
add(5, 10); // Output: 15
add(20, 30); // Output: 50     
add(-5, 15); // Output: 10


function multiply(a, b){
    console.log(a * b);
}   
multiply(4, 5); 
multiply(7, 3); 
multiply(6, 6); 
multiply(0, 100);
