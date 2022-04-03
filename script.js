const selectionArray = ["Rock, Paper, Scissors"];

function computerPlay() {
  let randomVal = Math.floor(Math.random() * computerArray.length);
  let returnVal = selectionArray[randomVal];
  return returnVal;
}

// for (let i = 0; i < 5; i++) {
//   // your code here!
// }

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    // Print Draw
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    //Print player one wins
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    //Print computer wins
  }
}
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
