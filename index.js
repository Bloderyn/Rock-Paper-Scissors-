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