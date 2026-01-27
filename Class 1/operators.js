// arithmetic operators 

// addtion, sub, muliplication, division, remainder, exponentiation, increment, decrement

// let a = 10; 
// let b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)

// a++
// console.log(a)

// b--
// console.log(b)








// assignment operators 

// let x  = 20;

// addition compound assignmnet operator

// x += 5; // x = x + 5
// console.log(x)


// comparison operators
let c = 10;
let d = "10";

console.log(c == d); //only the value it will not type
console.log(c === d); //value + type(equality operator)
console.log(c != d);
console.log(c !== d)
console.log(c > 5); //true
console.log(c < 5); //false
console.log(c >=10); // true

// logical operators 

// logical AND &&
// logical OR ||
// logical ! operator

let isAdult = true; 
let okLogin = false;

// true && true = true
// true && false = false
// false && true = false
// false && false = false

console.log(isAdult && okLogin)


// string opeators 

let one = "one item";
let two = "2nd item";
console.log(one +" " + two)


// ternary operator 
 
// condition ? "first statement" : "second statement"

// condition true = first statement
// condition false = second statement


let age = 16;
let result = age >=18 ? "Adult" : "Minor";
console.log(result)


// pre increment... increment 1st than use the value
// post increment... use the value 1st than increment


// pre increment... increment first and then use the value
// post incremnt ....use the value first then increment


let value = 100;
let value2 = ++value;
console.log(value);
console.log(value2)