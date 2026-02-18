// Restructuring in Jays allows us to extract values from Objects or arrays and
// assign them to variables in a single line

//before destructuring
const arr = [1, 2, 3,4 ,5 ,6];
const one = arr[0];
const two = arr[1];
const three = arr[2];
const four = arr[3];
const five = arr[4];
const six = arr[5];
console.log(one, two, three, four, five, six);

//after destructuring
const [a, b, c, d, e, f] = arr;
console.log(a, b, c, d, e, f);



const arr1 = [10, 20, 30, 40, 50, 60];
// with destructuring we can also skip values
const [first, second, third, , fifth, sixth] = arr1;
console.log(first, second, third, fifth, sixth);
