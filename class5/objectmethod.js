// Object methods

// Object key().... Returns array of keys

let user = {
    name: "parin",
    age: 25,
    city: "chennai"
};

let keys = Object.keys(user);
console.log(keys);  

// Object values()... Returns array of values

let values = Object.values(user);
console.log(values);

// key - value pairs ... Object.entries()

let entries = Object.entries(user);
console.log(entries);

// key - value pairs ... Object.fromEntries()

let entries = Object.entries(user);
console.log(entries);

// Object freeze makes object completely Immutable

let settings = {
    theme: "dark",
}
Object.freeze(settings);

settings.theme = "light"; // won't change
console.log(settings.theme); // dark
