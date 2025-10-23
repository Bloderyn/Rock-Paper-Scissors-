function getComputerChoice() {
    const choices = Math.random()*3;

    if (choices < 1) {
        return "rock";
    } else if (choices < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
   const choice = prompt("Rock, Paper, or Scissors?");
        return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    const humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") {
        console.log (`${humanChoice} beats ${computerChoice}. You win this round!`)
        humanScore++;
    } 
    else {
        console.log (`${computerChoice} beats ${humanChoice}. You lose this round!`)
        computerScore++;
        }
    }

    // Simulate 5 rounds of the game - no loop learnt yet
    playRound ("rock", "scissors");
    playRound ("rock", "paper");
    playRound ("paper", "scissors");
    playRound ("scissors", "paper");
    playRound ("paper", "rock");

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else (humanScore === computerScore) {
        console.log("The game is a tie!");
    }

}

playGame();
