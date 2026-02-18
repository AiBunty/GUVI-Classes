// Spread operator (...) This used to expand elements of an array object into individual elements

// Copy array or object
// Merging arrays or objects
// Heading or updating values without modifying original data

// Before spread (Without spread)

const arr1 = [1, 2, 3, 4, 5];

arr2 = arr1; // This will create a reference to arr1, not a copy

arr2.push(6); // This will modify arr1 as well  
console.log(arr1); // Output: [1, 2, 3, 4, 5, 6]
// After spread (With spread)
const arr3 = [1, 2, 3, 4, 5];

arr4 = [...arr3]; // This will create a new array with the same elements
arr4.push(6); // This will not modify arr3
console.log(arr3); // Output: [1, 2, 3, 4, 5]
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6]

//---- Don't modify the original array

// Example merge two arrays
const a = [1, 2, 3, 4 ,5];
const b = [6, 7, 8, 9, 10];
const merge = a.concat(b); // Without spread
const withSpread = [...a, ...b]; // With spread

console.log(merge); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(withSpread); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//add elements
const values = [10,20];

//values push(30): //wihout spread
// 
const updatedValues = [...values, 30, 40, 50, 60]

console.log(values); // Output: [10, 20]
console.log(updatedValues); // Output: [10, 20, 30, 40, 50, 60]

// ex 4

const user1 = {
    name: 'Mani',
    age: 30,
    
};

// Constant user 2 = user 1; // Without spread
const user2 = {...user1}; // With spread

user2.age = 100;

console.log(user1.age); // Output: 30
console.log(user2.age); // Output: 100

//ex5

const product1 = {
    name: 'Laptop',
    price: 150000,
};

//product1.price = 120000; /

const updatedProduct = {...product1, price: 120000}; // With spread

console.log(product1.price); // Output: 150000
console.log(updatedProduct.price); // Output: 120000



