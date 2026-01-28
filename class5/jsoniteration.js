let jsnonData = '{"name": "parin", "age": 25, "city": "chennai"}';

// Convert Json string to js object
let obj = JSON.parse(jsnonData);

// Iterate object for..in

for (let key in obj) {
    console.log(key, obj[key]);
}

// json Array

let jsonArray = '["html", "css", "Javascript", "react"]';

let skills = JSON.parse(jsonArray);

for (let i=0; i<skills.length; i++) {
    console.log(i, skills[i]);
}   
