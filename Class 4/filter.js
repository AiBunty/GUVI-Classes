// filer() creates the new array containing all the elements that satisfy the condition 

let numbers = [5, 10, 15, 20, 25, 30];

let result = numbers.filter(function(number) {
    return number % 2 === 0; // condition to filter even numbers
});

console.log(result); // [ 10, 20, 30 ]


// array of students

let students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 92},
    {name: "Charlie", score: 78},
    {name: "David", score: 90},
    {name: "Eve", score: 88}
];
// filter students who scored more than 85

let filterStudents = students.filter(function(student) {
    return student.score > 85;
});

console.log(filterStudents);
// [ { name: 'Bob', score: 92 },
//   { name: 'David', score: 90 },
//   { name: 'Eve', score: 88 } ]
