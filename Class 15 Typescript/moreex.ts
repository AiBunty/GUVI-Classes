// unction with type annotations

function add(a: number, b: number): number {
    return a + b;
}

// call teh function

let result = add(5, 10);
console.log(result);

//object type annotations

let user: { name: string; country: string } = {
    name: "John",
    country: "USA"
};

console.log(user.name);
console.log(user.country);


// array type annotations
let marks: number[] = [85, 90, 78];

// loop through the array
for (let mark in marks) {
    console.log(mark);
}
//function returning object

function getProfile(): { name: string; age: number } {
    return {
        name: "Alice",
        age: 30
    };
}
let profile = getProfile();
console.log(profile.name);
console.log(profile.age);

//arrow function 

const sum = (a: number, b: number): number => {
    return a + b;
}
console.log(sum(3, 7));

//calculate total price

function getTotalPrice(price: number, quantity: number): number {
    return price * quantity;
}   
console.log(getTotalPrice(19.99, 3));
