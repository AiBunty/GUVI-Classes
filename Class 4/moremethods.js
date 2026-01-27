//map Where is the new array by applying the function on each element

//  array.map(function(element) {
//      // return newvalue;})

// double the numbers

let numbers = [1, 2, 3, 4, 5];

let doublednumbers = numbers.map(function(numbers) {
    return numbers * 2;
});

console.log(doublednumbers); 

// Extract the property from the objects

let users = [
    {name: 'parin', age: 23},
    {name: 'ventu', age: 24},
    {name: 'sathish', age: 25},
    {name: 'kumar', age: 26},
];  

let names = users.map(function(user) {
    return {name: user.name, age: user.age};
});

console.log(names);