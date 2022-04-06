let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomVal = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomVal];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "ROUND DRAW";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    return "PLAYER ONE WINS THE ROUND!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    computerScore++;
    return "YOU LOSE THE ROUND!";
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = computerPlay();
//     const playerSelection = "rock";
//     console.log("Player one: " + playerSelection);
//     console.log("AI: " + computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(
//       "Score\nPlayer: " + playerScore + " Computer: " + computerScore
//     );
//   }
//   if (playerScore > computerScore) {
//     console.log("Congratulations, you won the game!");
//   } else if (playerScore < computerScore) {
//     console.log("You loss. Better luck next time");
//   } else {
//     console.log("DRAW. Try playing again.");
//   }
// }

// game(); //play the game 5 times
