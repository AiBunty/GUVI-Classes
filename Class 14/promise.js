// Her promise in javascript is an object that represents the result of the operation
//1 Success
//2 Failure
//3 Pending

// Pending state
// Let my promise equals to new promise(function(resolve, reject) {
//     // Do some asynchronous operation here
//     // If the operation is successful, call resolve() with the result
//     // If the operation fails, call reject() with an error message
// })

let myPromise = new Promise(function(resolve, reject) {

    let letsGotoMovie = true;

    if (letsGotoMovie) {
        resolve("Yay! We are going to the movie.");
    } else {
        reject("Oh no! We can't go to the movie.");
    }
});

// To consume the promise we can use the then() method to handle the resolved value and catch() method to handle the rejected value

myPromise
    .then(function(promiseResolved) {
    console.log(promiseResolved)
})
    .catch(function(error) {
    console.log(error)
})
