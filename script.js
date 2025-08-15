let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(3 * Math.random());
    switch (num) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function getHumanChoice() {
    prompt("Rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();

    humanWins = (humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper");

    if (humanWins) {
        console.log("You win! " + humanChoice + " beats " + computerChoice " .");
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice " .");
        computerScore++;
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors!");
}