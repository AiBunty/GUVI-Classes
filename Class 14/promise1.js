let myPromise = new Promise(function(resolve, reject) {

    let marks = 27;

    if (marks >= 35) {
        resolve("you are passed");
    } else {
        reject("you are failed");
    }
});

// Handle the promise using then() and catch() methods

myPromise
    .then(function(result) {
    console.log(result)
})
    .catch(function(error) {
    console.log(error)
})
