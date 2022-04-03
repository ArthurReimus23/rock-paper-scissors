function computerPlay() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomVal = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomVal];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "PLAYER ONE WINS!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    return "YOU LOSE!";
  }
}

for (let i = 0; i < 5; i++) {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  console.log("Player one: " + playerSelection);
  console.log("AI: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
