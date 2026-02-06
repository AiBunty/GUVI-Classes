// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.



// Given a number N, check whether it is prime or not. Print 'yes' if it is prime else print 'no'.


// Input Description:
// The input consists of a single integer N.


// Output Description:
// The output is 'yes' if N is prime, otherwise 'no'.


// Sample Input:
// 123


// Sample Output:
// no

var number = userInput[0]
var isPrime = true;

// Check if number is equal to 1
if (number == 1) {
    {
        console.log("no");
    }

} else if (number > 1) {
    for let i = 2; i <= number i++ {
        if (number % i == 0) {  
            isPrime = false;
            break;
        }
    }

    if (isPrime) {      

        console.log("yes");
    } else {
        console.log("no");
    }       
} else {
    console.log("no");
}
