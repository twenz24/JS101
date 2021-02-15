const readline = require('readline-sync');

console.log('Welcome to Calculator!');

// Ask the user for the first number.
console.log('Whats the first number?');
let number1 = readline.question();

// Ask the user for the second number.
console.log('Whats the first number?');
let number2 = readline.question();

// Ask the user for an operation to perform.
console.log('What operation would you like to perform \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

// Perform the operation on the two numbers.
let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
output = Number(number1) / Number(number2);
}

// Print the result to the terminal.
console.log(`The Result is: ${output}`);
