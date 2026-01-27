// splice, slice and join

// splice...remove elements, add elements, replace elements

//array.splice(startindex, deleteCount, element1, element2, ...)

let numbers = [10, 20, 30, 40, 50];

// // remove 2 elemnets from index 1
// // let removedElements = numbers.splice(1, 2);

// let remove = numbers.splice(1, 2); // removes 20, 30
// console.log(remove);   // [ 20, 30 ]    

numbers.splice(1, 2, "parin1", "parin2");
console.log(numbers); // [ 10, 'parin1', 'parin2', 40, 50 ]



// Slice creates the new array by copying the portion of the array
// array.slice(startindex, endindex)    
// startindex .... is inclusive
// endindex ..... is exclusive  

lets numbs = [10, 20, 30, 40, 50, 60, 70];

numbs.slice(2, 5); // from index 2 to index 5 (5 not included)



// join... convert array to single string with separator

let names2 = ["parin", "kumar", "singh"];
let result = names2.join("*"); // separator is space
console.log(result); // parin*kumar*singh


