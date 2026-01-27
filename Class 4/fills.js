// fill replaces the elements with the static value
// array.fill(value, startindex, endindex)
//startindex .... is inclusive
//endindex ..... is exclusive

let arr = [1, 2, 3, 4, 5];
// arr.fill(9)
arr.fill(9, 1, 3); // from index 1 to index 3 (3 not included)  
console.log(arr); // [ 1, 9, 9, 4, 5 ]



let arr2 = [10, 20, 30, 40, 50];
arr2.fill(100, 2, 4); // from index 2 to index 4 (4 not included)
console.log(arr2); // [10, 20, 0, 0, 50]