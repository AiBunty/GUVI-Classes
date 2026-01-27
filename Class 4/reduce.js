// Reduce takes many values in an array and reduces them into one single array

Array.reduce(function(accumulator, currentValue, currentIndex, array) {
    // return newvalue
}, initialValue);

// accumulator  ->  it holds the accumulated value
// currentValue  ->  current element from the array being processed
// currentIndex  ->  index of the current element
// array         ->  original array on which reduce is called
// initialValue  ->  starting value for accumulator (optional)

let numbers = [20, 30, 40, 50, 60];
let sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0); // initial value is 0

1) acc = 0, curr = 20  => return 20
2) acc = 20, curr = 30 => return 50
3) acc = 50, curr = 40 => return 90
4) acc = 90, curr = 50 => return 140
5) acc = 140, curr = 60 => return 200       

console.log(sum); // 200