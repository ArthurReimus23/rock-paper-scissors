const titleDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const playerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");

const mainGrid = document.getElementById("main");
const gameGrid = document.getElementById("game");
const displayGrid = document.getElementById("display");
const resultGrid = document.getElementById("result");

const choices = ["Rock", "Paper", "Scissors"];

let playerChoice;
let computerChoice;

const buttonClick = (e) => {
  playerChoice = e.target.id;
  console.log(playerChoice);
  playerChoiceDisplay.innerHTML = "Player: " + playerChoice.toUpperCase();
  randomComputerChoice();
  playRound();
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = button.id;
  button.addEventListener("click", buttonClick);
  gameGrid.appendChild(button);
}

displayGrid.appendChild(playerChoiceDisplay);
displayGrid.appendChild(computerChoiceDisplay);
resultGrid.appendChild(resultDisplay);

const randomComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  // computerChoiceDisplay.innerHTML = "Computer";
  computerChoiceDisplay.innerHTML = "Computer: " + computerChoice.toUpperCase();
  console.log(computerChoice);
};

const playRound = () => {
  switch (playerChoice + computerChoice) {
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      resultDisplay.innerHTML = "Draw";
      break;
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      resultDisplay.innerHTML = "You win!";
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      resultDisplay.innerHTML = "You lose :(";
      break;
  }
};
