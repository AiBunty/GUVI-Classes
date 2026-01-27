
// let a = 10;
// console.log(a)


// re-declaration is not possible in the same scope
// let name = "rama";
// let name = "venkat";
// console.log(name)


// in let, re-assginment is possible
// let count = 1;
// count = 100;
// console.log(count)


// let is the block scope
let a = 200
{
    let a = 100; //let is the block scope...let a = 100 will not be visible outside
    console.log(a); //
}
console.log(a); //


