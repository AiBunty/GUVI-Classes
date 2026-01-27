// some method checks weather atleast  one elemment satisfies the condition
// returns true if any one matches
// returns false if no element matches

// is there any even number in the array

let nums = [1, 3, 5, 7, 17, 9];

let result = nums.some(function(num) {
    return num % 2 === 0; // condition to check even number
});

console.log(result); // false

// any -ve number in the marks

let marks = [23, 45, -12, 67, 89];
let hasNegative = marks.some(function(mark) {
    return mark < 0; // condition to check negative number
});

console.log(hasNegative); // true
// any student scored more than 90

let students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 92},
    {name: "Charlie", score: 78},
    {name: "David", score: 90},
    {name: "Eve", score: 88}
];  
let hasTopScorer = students.some(function(student) {
    return student.score > 90; // condition to check score greater than 90
});

console.log(hasTopScorer); // true

let marks2 = [23, 45, 12, -67, 89];

let marksfinal = marks2.some(function(mark) {
    return mark < 0; // condition to check negative number
});

console.log(marksfinal); // true