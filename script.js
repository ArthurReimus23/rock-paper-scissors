let playerScore = 0;
let computerScore = 0;

const playerChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomVal = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomVal];
}

function playRound(playerSelection, computerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      document.getElementById("round-result").innerHTML = "draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      document.getElementById("round-result").innerHTML = "P1 wins the round!";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      computerScore++;
      document.getElementById("round-result").innerHTML = "AI wins the round!";
    }
    document.getElementById("player-score").innerHTML =
      "Player: " + playerScore;
    document.getElementById("computer-score").innerHTML =
      "Comp: " + computerScore;
  }
}

const playRock = document.getElementById("btnRock");
playRock.addEventListener("click", function () {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  document.getElementById("player-choice").innerHTML = "rock";
  document.getElementById("comp-choice").innerHTML = computerSelection;
  playRound(playerSelection, computerSelection);

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
      console.log("You loss. Better luck next time");
    } else {
      console.log("DRAW. Try playing again.");
    }
  }
});

const playPaper = document.getElementById("btnPaper");
playPaper.addEventListener("click", function () {
  const playerSelection = "paper";
  const computerSelection = computerPlay();
  document.getElementById("player-choice").innerHTML = "paper";
  document.getElementById("comp-choice").innerHTML = computerSelection;
  playRound(playerSelection, computerSelection);

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
      console.log("You loss. Better luck next time");
    } else {
      console.log("DRAW. Try playing again.");
    }
  }
});

const playScissors = document.getElementById("btnScissors");
playScissors.addEventListener("click", function () {
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  document.getElementById("player-choice").innerHTML = "scissors";
  document.getElementById("comp-choice").innerHTML = computerSelection;
  playRound(playerSelection, computerSelection);

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
      console.log("You loss. Better luck next time");
    } else {
      console.log("DRAW. Try playing again.");
    }
  }
});

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
