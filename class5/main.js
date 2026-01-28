// Json is Javascript object notation 
// Lightweight
// Data format used to store and exchange the data between client and server

// Javascript Object

// let user = {
//     name: "John",
//     age: 30,    
//     isActive: true,
// }


// json


// Json > Javascript object .. JSOn.parse()

// let jsonData = '{"name": "parin", "age": 25,)';

// // Convert Jason string to JS object
// let user = JSON.parse(jsonData);

// console.log(user.name)


// Javascript object > Json .. JSON.stringify()

let person = {
    name: "parin",
    age: 25,
};

let jsonData = JSON.stringify(person);
console.log(jsonData);

// Javascript object

Let response = {
    status: "ok",
    data: {
        id: 101
        name: "toshiba"
        price: 45000
    }
};
console.log(response.data.name);
