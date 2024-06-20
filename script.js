function generateMachineChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    randomChoice = "rock";
  } else if (randomChoice == 1) {
    randomChoice = "paper";
  } else if (randomChoice == 2) {
    randomChoice = "scissors";
  }
  return randomChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Do you choose rock, paper or scissors?");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        return "It's a tie!";
      } else if (computerChoice === "paper") {
        return "Paper covers rock. You lose!";
      } else if (computerChoice === "scissors") {
        return "Rock crushes scissors. You win!";
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        return "Paper covers rock. You win!";
      } else if (computerChoice === "paper") {
        return "It's a tie!";
      } else if (computerChoice === "scissors") {
        return "Scissors cuts paper. You lose!";
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        return "Rock crushes scissors. You lose!";
      } else if (computerChoice === "paper") {
        return "Scissors cuts paper. You win!";
      } else if (computerChoice === "scissors") {
        return "It's a tie!";
      }
      break;
    default:
      return "Invalid choice. Please choose rock, paper, or scissors.";
  }
}

let humanScore = 0;
let computerScore = 0;
let humanchoice = getHumanChoice();
let machineChoice = generateMachineChoice();
