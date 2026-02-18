function getuser() {
    return["Parin", "Daulat"]
}

//with destructuring

const [Name, age] = getuser();
console.log(Name);
console.log(age);

const data = [10, 20, [30, 40]];

const [num1, num2, [num3, num4]] = data;

console.log(num1, num2, num3, num4, num5);
