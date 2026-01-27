
// 10;
// 20;

// console.log(10 + 20);

// 100 + 10;

// // 100 places
// 10
// 10
// 10 
// 10

// javascript variable...
//Variable is a container used to store the data....

// in javascript, we can declare the variables
// 1) var keyword
// 2) let keyword
// 3) const keyword

// declaration with "var"
// var firstName = "venkat"; 
// var lastname = "ram"
// console.log(firstName)
// console.log(lastname)
//declare the variable with name called "firstName", assigned/store the value (venkat)


// re-declaration is allowed 
var a = 10; //we are declare variable and assigning value 10
var a = 20;
var a = 100;
console.log(a)


var name = "venkat"; //we are declare name and assign "venkat"..(init)
name = "rama"; //re-assignment is allowed in javascript
console.log(name)


// var is not the block scope 


{
    var value = 2000;
    console.log(value)
}
console.log(value); //incase of var we can able to access outside of the block


// 
var x = 10;
{
    var x = 20;
}
console.log(x); //20


