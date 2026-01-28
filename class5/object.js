// Object is the collection of related data and functionality
// Stored key - value pair
// key : property name
// value -> data(string, number, boolean, array, object, function)  
// without object

let name = "parin";
let age = 25;
let course = "Mern Stack";

// with object

let student = {
    name: "parin",
    age: 25,
    course: "Mern Stack",   
}

// accessing object values
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Object with function (method)

let mobile = {
    brand: "iphone",
    model: "13 pro max",
    market: function() {
        console.log("Available in Guvi Stores");
    }
}

let product = {
    brand: "samsung",
    price: 25000,
    discount: 2000 ,
    finalprice: function() {
        return this.price - this.discount;
    }       
}

console.log(product.finalprice());