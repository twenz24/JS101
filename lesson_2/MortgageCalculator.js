const readline = require('readline-sync');

function prompt(greeting) {
  console.log(`=>${greeting}`);
}

prompt("Welcome to the Mortgage Calculator!!!");

prompt('What is your loan amount');
let loanAmount = readline.question();

prompt('Please input your Annual Percentage Rate (APR) as a decimal');
let annPercentage = readline.question();
while (annPercentage > 1 || annPercentage === '') {
  prompt('Please enter the APR in the corret format (X.XX)');
  annPercentage = readline.question();
}

prompt('Input the number of entire years on the loan');
let loanYears = readline.question();
prompt('Input the remaining months after the last whole year');
let loanMonths = readline.question();

let monthlyInt = annPercentage / 12;

let monthlyDuration = (loanYears * 12) + loanMonths;

let mPay = loanAmount *
  (monthlyInt / (1 - Math.pow((1 + monthlyInt), (-monthlyDuration))));

let roundedPayment = mPay.toFixed(2);

prompt(`Your monthly payment will be $${roundedPayment}`);
