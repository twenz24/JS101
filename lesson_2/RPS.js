const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}
let userWins = 0;
let computerWins = 0;
// eslint-disable-next-line complexity
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    prompt('You win!');
    userWins += 1;
  } else if ((computerChoice === 'rock' && (choice === 'scissors' || choice === 'lizard')) ||
  (computerChoice === 'paper' && (choice === 'rock' || choice === 'spock')) ||
  (computerChoice === 'scissors' && (choice === 'paper' || choice === 'lizard')) ||
  (computerChoice === 'lizard' && (choice === 'spock' || choice === 'paper')) ||
  (computerChoice === 'scissors' && (choice === 'paper' || choice === 'lizard'))) {
    prompt('Computer wins!');
    computerWins += 1;
  } else {
    prompt("It's a tie!");
  }
}
function displayRecords(user , computer) {
  if (user < 4 && computer < 4) {
    console.log(`You have ${user} wins and your opponent has ${computer} wins`);
    if (computer === 3) {
      console.log("Your opponent has won the series!");
    } else if (user ===   3) {
      console.log('You have won the series!');
    }
  } else {
    computer = 0;
    user = 0;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  displayRecords(userWins, computerWins);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}