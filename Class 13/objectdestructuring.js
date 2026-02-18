//ex1

const user = {
    name: 'John',
    city: 'New York',
    country: 'USA'
};

const { name, city, country } = user;

console.log(name);
console.log(city);
console.log(country);


//ex2

const response = {
    status: 200,
    data: {
        title: "Laptop",
        price: 88000
    }
};

// const title = response.data.title;
// const price = response.data.price;

const {data: { title, price }} = response;

console.log(title, price);

