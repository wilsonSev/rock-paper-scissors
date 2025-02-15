function capitalize(str) {
  return (str.charAt(0)).toUpperCase() + str.substring(1, str.length)
}

function getComputerChoice() {
  rand = Math.random()
  if (rand <= 1/3){
    return "rock"
  } else if (rand <= 2/3) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  choice = window.prompt("Enter \"rock\", \"paper\" or \"scissors\"")

  while ((choice !== "rock") && (choice !== "paper") && (choice !== "scissors")){
    alert("Incorrect data! Try again")
    choice = window.prompt("Enter \"rock\", \"paper\" or \"scissors\"")
  }
  
  return choice
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      alert("Draw! Computer also chose " + capitalize(computerChoice));
      humanScore++;
      computerScore++;
      return;
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "scissors" && computerChoice === "paper") ||
          (humanChoice === "paper" && computerChoice === "rock")) {
            alert("Congrats, you win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
            humanScore++;
          } else {
            alert("You lose! " + capitalize(humanChoice) + " Is bitten by " + capitalize(computerChoice));
            computerScore++;
          }
  }

  for (let i = 1; i <= 5; i++) {
    alert("Round " + i)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  alert("The game has finished. Result:");
  if (computerScore === humanScore) {
    alert("Draw");
  }
  if (computerScore > humanScore) {
    alert("You lose");
  }
  if (computerScore < humanScore) {
    alert("You win");
  }
  alert("Want to play another game?")
  let choice;
  choice = window.prompt("Want to play another game?").toLowerCase();
  while (choice !== "yes" && choice !== "no") {
    choice = window.prompt("Incorrect input! Type Yes or No").toLowerCase();
  }

  if (choice === "yes") {
    playGame()
  }
}

playGame()