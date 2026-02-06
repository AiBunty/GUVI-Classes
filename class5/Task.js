// count how many keys are present in a JSON object.

// let jsonObject = {
//     "class": "45Guvi",
//     "Sirname": "Venkat",
//     "Class": "5",
//     "Task": "Gituhub"
// };
// let keyCount = Object.keys(jsonObject).length;
// console.log("Number if Keys are present", keyCount);



// What is lazy loading with modules

// Difference between eager loading and lazy loading

// What is shared module

// What is core module

// What is state management

// Have you used NgRx Explain flow.

// Difference between Redux and NgRx

// What is immutability

// What is XSS How Angular prevents it

// What is sanitization

// What are best practices for folder structure

// How do you handle environment variables

// Difference between providedIn: 'root' and providers array

// What is AOT compilation

// Difference between JIT and AOT

// What is tree shaking

// How do you deploy Angular app

// How would you optimize a slow Angular application

// How do you handle API errors globally

// How do you restrict routes based on user roles

// How do you reuse components efficiently

// How do you handle large forms

// How do you unsubscribe from observables

// How do you pass data between unrelated components

// How do you implement pagination

// How do you handle authentication in Angular

// How do you protect routes after login

// How do you load data before route activation

// Explain a real project challenge you faced in Angular.

// Iterate over a JSON object and print key–value pairs.

// let jsonObj = {
//     "Name": "Venkat",
//     "Class": "5",
//     "Task": "Gituhub"
// };  
// for (let key in jsonObj) {
//     console.log(key + ": " + jsonObj[key]);
// }   


// Merge two JSON objects into one.

let jsonObj1 = {

    "Tailor": "Mastani",

    "Customer": "Parin"

};

let jsonObj2 = {

    "Tailor2": "Ustad India",

    "Shop": "Udupi"

};

let  mergedObj = {...jsonObj1, ...jsonObj2} ;
console.log(mergedObj);

