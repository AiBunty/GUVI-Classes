// Rest operator (...) This is used to collect multiple elements into a single array or object
// Function parameters
// Destructuring assignment

// Example 1: Function parameters

function add (a, b) {
    return a + b;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8)); // Output: 3
// With rest operator

function addWithRest(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("restoperator.js executed successfully");
console.log(addWithRest(1, 2, 3, 4, 5, 6, 7, 8)); // Output: 36

// Example 2: Destructuring assignment

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Example with different variable names to avoid redeclaration
const marks2 = [90, 85, 78, 92, 88];
const [firstMark, secondMark, thirdMark, ...goodMarks] = marks2;
console.log(firstMark); // Output: 90
console.log(secondMark); // Output: 85
console.log(thirdMark); // Output: 78
console.log(goodMarks); // Output: [92, 88]


const marks = [36, 45, 60, 63, 71, 80, 90];

const [first2, second2, third2, ...goodMarks2] = marks;

console.log(first2, second2, third2); // Output: 36 45 60
console.log(goodMarks2); // Output: [63, 71, 80, 90]


const user = {
    name: 'Mani',
    age: 30,
    city: 'Chennai',
    country: 'India'
};

const {name, age, ...address} = user;

console.log(name); // Output: Mani
console.log(age); // Output: 30
console.log(address); // Output: { city: 'Chennai', country: 'India' }  

