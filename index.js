//Part 1 Fizz Buzz

// To begin, solve the following classic “Fizz Buzz” problem.
// There are a few different ways to do this - experiment with what you think is the most efficient.
//  Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is both divisible by both 5 and 3!: Fizz Buzz!`);
  } else if (i % 3 === 0) {
    console.log(`${i} is divisible by 3: Fizz!`);
  } else if (i % 5 === 0) {
    console.log(`${i} is divisible by 5: Buzz!`);
  }
}

// Part 2: Prime Time

// Now we will move onto something slightly more complex.

// Context: A prime number is any whole number greater than 1 that cannot be exactly divided
//  by any whole number other than itself and 1. For example, the number 5 is prime because
//  it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1.
//  Similarly, the numbers 7 and 11 are prime. As numbers become larger,
// determining whether or not they are prime is increasingly difficult,
//  but loops make this process relatively easy!

// Write a script that accomplishes the following:

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

//Continuing with the example above, if n is equal to 4, your loop should log 5.
//  Similarly, if n is 5, it should log 7, and if n is 9, it should log 11.
//  Test your loop with higher numbers and reference an online prime number table
//  to determine the accuracy of your code.

//Be careful! If you set n to a number too large, your loop could take a long time to process.

// THIS WAS HARD
let n = 0;

while (n <= 31) {

  n++; // incrementing...
  let primeNumber = true; // boolean to check if numbers are prime or not

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // starting at 2 because 1 wouldnt make sense since a prime is divisible by 1 and itself
    // I dont nesscarly need the Math.sqrt() function but i thought it was a cool adition since i learned more about it today with this for loop 😭
    // in this for loop the number is looking from between 2 and the square root of the n, so it makes things quicker, if n does have a square root the loop ends!
    console.log(`Checking if ${n} is divisible by ${i}...`);
    if (n % i === 0) {
      // if the number is divisible by anything other than itself and 1 NOT PRIME!//
      console.log(`${n} is divisible by ${i}, so it's NOT prime!`);
      primeNumber = false;
      break; // stops the while loop theres no more need to search saving time
    }
  }
    if (primeNumber) {
      console.log(`${n} is the next prime number!`);
    }
}

// I found this hard so I used resources.

/*

  Prime Number Checking Algorithm - Documentation

 Sources:
  
  1️ Wolfram MathWorld - Prime Numbers
     - Author: Eric W. Weisstein
     - URL: https://mathworld.wolfram.com/PrimeNumber.html
     - Description: Provides a formal definition and properties of prime numbers.

  2️ WsCube Tech - Prime Number in JavaScript
     - URL: https://www.wscubetech.com/blog/prime-number-in-javascript/
     - Description: Explains multiple ways to check for prime numbers using JavaScript.

  3️ MDN Web Docs - Math.sqrt() in JavaScript
     - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
     - Description: Official Mozilla documentation explaining the Math.sqrt() function 
       and its role in optimizing mathematical operations.

   4 MDN Web Docs - Loops and Iteration in JavaScript
     - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
     - Description: Covers different loop types (`for`, `while`, `do...while`) and 
       best practices for iteration in JavaScript.
*/
