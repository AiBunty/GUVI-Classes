// Check if all elements satisfy condition
// True if all elements satisfy condition
// False if any one element does not satisfy condition

let marks = [23, 45, 67, 89, 90];

let proceed = marks.every(function(mark) {
    return mark >= 22; // condition to check if all marks are passing
});

console.log(proceed); // true   


// Reverse the original array reverse method

let numbers = [10, 20, 30, 40, 50];
let names = ["A", "B", "C", "D", "E"];
numbers.reverse();
console.log(numbers); // [ 50, 40, 30, 20, 10 ] 
names.reverse();
console.log(names); // [ 'E', 'D', 'C', 'B', 'A' ]  

