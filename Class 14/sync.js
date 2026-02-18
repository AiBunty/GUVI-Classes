// Javascript is a single thread programming language it will execute line by line
// Synchronous code executes line by line each task must finish before the next task can start. If a task takes a long time to complete, it can block the execution of the rest of the code, leading to a poor user experience.

console.log("Start of the code");
console.log("Middle of the code");
console.log("End of the code");

for (let i = 0; i < 50000; i++) {
    console.log("Number", i);
}
console.log("a")    
console.log("b")
console.log("c")

// But we can make JS as the asynchronous programming language
// Asynchronous code does not wait for the current task to finish

// We can make js as the sync programming language using the following

//1 setTimeout(function() {
//2 setinterval(function() {
//3 Promises
//4 Async/Await 
//5 fetch API

console.log("Start of the code");
console.log("Middle of the code");
console.log("End of the code");

setTimeout(function() {
    for (let i = 1; i < 500; i++) {
        console.log("Number", i);
    }
}, 10000);

console.log("a")    
console.log("b")
console.log("c")

