// // how to convert names to uppercase

// let names = ["parin", "kumar", "singh"];

// let upperNames = names.map(function(name) {
//     return name.toUpperCase();
// }); 
// console.log(upperNames); // [ 'PARIN', 'KUMAR', 'SINGH' ]


// write a program to find any even number exits

let numbers = [1, 3, 5, 7, 8, 9];

// let hasEven = numbers.some(function(num) {
//     return num % 2 === 0; 
// });   
// console.log(hasEven);


//find the sum of the numbers using reduce method

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
// accumulator = 0, currentValue = 1 => return 1
// accumulator = 1, currentValue = 3 => return 4
// accumulator = 4, currentValue = 5 => return 9
// accumulator = 9, currentValue = 7 => return 16
// accumulator = 16, currentValue = 8 => return 24
// accumulator = 24, currentValue = 9 => return 33  
// final sum = 33


//find the first number greater than 50

let nums = [10, 25, 60, 45, 80, 30];

let firstGreaterThan50 = nums.find(function(n) {
    return n > 50;
});     
console.log(firstGreaterThan50); // 60