const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

// Function to update the score and display the result
function updateGameResult(result, playerChoice, computerChoice) {
  const resultText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
  document.getElementById("choice-prompt").textContent = resultText;
  document.querySelector(
    "#score"
  ).textContent = `${playerScore} - ${computerScore}`;

  rounds++;
  if (rounds >= 3) {
    const finalResult =
      playerScore > computerScore
        ? "You win the game!"
        : "Computer wins the game!";
    document.getElementById("choice-prompt").textContent = finalResult;
    rounds = 0; // Reset rounds for the next game
    playerScore = 0;
    computerScore = 0;
  }
}

// Function to handle a player's choice
function handlePlayerChoice(event) {
  const playerChoice = event.target.classList[0]; // Get the choice from the button's class
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  updateGameResult(result, playerChoice, computerChoice);
}

// Add event listeners to each button
document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const imgElement = event.currentTarget.querySelector("img"); // Find the img inside the clicked button
    handlePlayerChoice({ target: imgElement });
  });
});

// Add functionality to the restart button
document.getElementById("restart").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  document.getElementById("choice-prompt").textContent =
    "Choose: Rock, Paper, or Scissors";
  document.querySelector("#score").textContent = `0 - 0`;
});
