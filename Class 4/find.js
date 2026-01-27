// // find returns the first element that satisfies the given condition
// ///if not found -> returns undefined
// //// findindex...find the first index that matching the condition
// //findLast -> returns the last element that satisfies the condition 
// // find the first even number

// let nums = [5, 7, 10, 12, 16, 21, 20];

// let result = nums.find(function(n){
//     return n % 2 === 0
// })

// let resultIndex = nums.findIndex(function(n){
//     return n % 2 === 0
// })


// let resultFindLast = nums.findLast(function(n){
//     return n % 2 === 0
// })


// let resultFindLastIndex = nums.findLastIndex(function(n){
//     return n % 2 === 0
// })

// console.log(result) //find 
// console.log("index of first even", resultIndex); //findindex
// console.log("last value that satisifies the condiiton", resultFindLast)
// console.log("last index value that satisifies the condiiton", resultFindLastIndex)


//find the number > 100

let numbers = [20, 50, 200, 150, 100];

// let result1 = numbers.find(function(num) {
//         return num > 100

let result2 = numbers.find(function(num) {
    return num > 50 
})
console.log(result2)