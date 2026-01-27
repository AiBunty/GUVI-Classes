// Sort method arranges array elements in the order

let names =  ["iphone", "samsung", "oneplus", "xiaomi", "nokia"];
names.sort();
console.log(names); // [ 'iphone', 'nokia', 'oneplus', 'samsung', 'xiaomi' ]


// ex 2:  sort will not work as expected with numbers
let values = [40, 100, 1, 5, 25, 10 , 564, 223 ];   
values.sort();
console.log(values); // [ 1, 10, 100, 223, 25, 40, 5, 564 ]


// we are going to use compare function to sort numbers in ascending order

// compare function tell sort how to compare two numbers

//array.sort(function(a, b) {
    // return a - b; // Ascending order
    // return b - a; // Descending order
//});

let values1 = [40, 100, 1, 5, 25, 10 , 564, 223 ];   
values1.sort(function(a, b) {
    return a - b; // Ascending order
    }); 
console.log(values1);

let values2 = [40, 100, 1, 5, 25, 10 , 564, 223 ];   
values2.sort(function(a, b) {
    return b - a; // Descending order
    });
console.log(values2);
