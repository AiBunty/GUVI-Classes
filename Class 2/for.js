let mobiles = ["oppo", "vivo", "lg", "samsung"]

for (let mobile in mobiles) {
    console.log(mobile)
}

for (let mobile in mobiles) {
    if (mobile[mobile] === "oppo") {
        console.log(mobile)

    }
}


const numbers = [10, 5, 20, 8];
let largest = numbers[0]; 

for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}

console.log(largest); 



const numbers = [10, 5, 20, 8];
let sum = 0;

for (let value of numbers) {
    sum += value;    
    }


console.log("total Sum", sum); 

