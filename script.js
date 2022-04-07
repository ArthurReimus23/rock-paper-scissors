const computerChoiceDisplay = document.createElement("h1");
const playerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");

const mainGrid = document.getElementById("main");
mainGrid.appendChild(playerChoiceDisplay);
mainGrid.appendChild(computerChoiceDisplay);
mainGrid.appendChild(resultDisplay);

const choices = ["rock", "paper", "scissors"];

let playerChoice;
let computerChoice;

const buttonClick = (e) => {
  playerChoice = e.target.id;
  console.log(playerChoice);
  playerChoiceDisplay.innerHTML = "Player: " + playerChoice;
  randomComputerChoice();
  playRound();
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = button.id;
  button.addEventListener("click", buttonClick);
  mainGrid.appendChild(button);
}

const randomComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  // computerChoiceDisplay.innerHTML = "Computer";
  computerChoiceDisplay.innerHTML = "Computer: " + computerChoice;
  console.log(computerChoice);
};

const playRound = () => {
  switch (playerChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      resultDisplay.innerHTML = "Draw";
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      resultDisplay.innerHTML = "You win!";
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      resultDisplay.innerHTML = "You lose :(";
      break;
  }
};
