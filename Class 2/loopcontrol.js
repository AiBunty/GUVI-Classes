for(let i = 1; i<=10; i++) {
    if(i ===5){
        break;
    }
    console.log(i)
}


for(let i = 1; i<=10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}


let age = [25, 30, -1, 40, 2, 42]

for(let i =0; i<age.lenght; i++) {
    if(age[i] <=0){
        continue
    
    }
    console.log("valid age", age[i])
}

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    }
}

console.log("Count:", count)