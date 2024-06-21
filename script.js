function getComputerChoice() {
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

function playGame() {
  function playRound(humanChoice, computerChoice) {
    //victory variable to determine who won the round: 0=human, 1=machine, 2=tie
    let victory;
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "rock") {
          victory = 2;
          console.log("It's a tie!");
        } else if (computerChoice === "paper") {
          victory = 1;
          console.log("Paper covers rock. You lose!");
        } else if (computerChoice === "scissors") {
          victory = 0;
          console.log("Rock crushes scissors. You win!");
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          victory = 0;
          console.log("Paper covers rock. You win!");
        } else if (computerChoice === "paper") {
          victory = 2;
          console.log("It's a tie!");
        } else if (computerChoice === "scissors") {
          victory = 1;
          console.log("Scissors cuts paper. You lose!");
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          victory = 1;
          console.log("Rock crushes scissors. You lose!");
        } else if (computerChoice === "paper") {
          victory = 0;
          console.log("Scissors cuts paper. You win!");
        } else if (computerChoice === "scissors") {
          victory = 2;
          console.log("It's a tie!");
        }
        break;
      default:
        victory = -1;
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
    return victory;
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = playRound(humanChoice, computerChoice);
    if (winner == 0) {
      humanScore++;
    } else if (winner == 1) {
      computerScore++;
    }
  }
  console.log(
    "Final Score: Human - " + humanScore + ", Computer - " + computerScore
  );
}

playGame();
