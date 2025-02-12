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

  while ((choice != "rock") && (choice != "paper") && (choice != "scissors")){
    alert("Incorrect data! Try again")
    choice = window.prompt("Enter \"rock\", \"paper\" or \"scissors\"")
  }
  
  return choice
}