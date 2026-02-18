// number data type
// we can store
// integers
// floating point numbers
// negative numbers


let age: number = 25;
let price: number = 19.99;
let temperature: number = -5;
console.log(age, price, temperature);

//string data type
// stores text or characters

let firstName: string = "Parin";
let lastName: string = "Daulat";

//template literals
let fullName: string = `My Name is ${firstName} ${lastName}`;
console.log(fullName);

// boolean data type
// stores true or false values

let isloggedIn: boolean = true;
let isAdmin: boolean = false;

if (isloggedIn) {
    console.log("User is logged in");
}

//array data type
//1) using square brackets

let marks: number[] = [85, 90, 78];
console.log(marks);

//2) using generic array type

let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names);

// 3) mixed array

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log(mixedArray);

// tuple data type
// a tuple is an array with fixed number of elements where each element can have a different type

let student: [number, string] = [101, "Parin"];
console.log(student);

//any data type
// used whe n we don't know the type of data that will be stored in a variable

let value: any = 100;
value = "Now I'm a string";
value = true;

//object data type
// used to store collections of data and more complex entities

let persom: object = {
    name: "Parin",
    city: "Mumbai",
    age: 25
};
console.log(persom);


