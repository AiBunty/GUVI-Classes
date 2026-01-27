// data type tells javascript what kind of value is stored in the given variable.

//javascript internally do automatic type conversion 


// let value = true;
// console.log(typeof value)

// in javascript data types are divided into two categories 

// 1) Primitive data types 

// a)  Number: used for intergers and floating point numbers

// let a = 100;
// let b = 100.5
// console.log(typeof a, typeof b)



// b) string -> used to store the text...
//we can use either single quotes '  ' 
//we can use double quotes " "
// `    `

// let name = "venkat";
// let firstName = 'rama';
// console.log(typeof name, typeof firstName)


// c) boolean...only two values.. either true or false

// let isLoggedin = true;
// let hasPaid = false;

// console.log(typeof isLoggedin, typeof hasPaid)


// d) undefined... declared the variable but not assigned the value

// let y;
// console.log(typeof y)

// // e) null....absence of the value

// let user = null;
// console.log(typeof user); //object


// symbol, bigint

// 2) non Primitive data types / reference data types

// a) object -> stores key - value pair

// let person = { //curly bracket
//     name: "venkat",
//     city : {
//         pincode: "523155",
//         street: "main road"
//     }
// };

// console.log(person.name)
// console.log(person.city.street)


// b) array ... used to store group of values [] (square bracket)

// let arr = [1, 2, 3, 4, 5]

// c) function

//function defintion 

//one function...
// function welcome() {
//     console.log("venkat");
//     console.log("ravi");
//     console.log("shiva");
//     console.log("ramaaaa")
// }

// function call
// welcome()

// copy by value ...memory is fixed...memory will be allocated(primitive data type)

let a = 10; //a = 10
let b = a; // b = 10

b = 20; 

console.log(a); //10
console.log(b); //20


// copy by reference  (non-primitive)

let person1 = {name: "venkat"};
let person2 = person1;

person2.name = "rama";

console.log(person1.name) ; //rama
console.log(person2.name) // rama

Javascript is a programming language used to make the web pages interactive.

using Javascript we can able develop both backend and frontend applications


browser they v8 engine -> Javascript code -> compile -> machine code

vs code + node js -> Javascript -> compile -> machine code