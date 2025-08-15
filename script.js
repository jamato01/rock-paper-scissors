let humanScore = 0;
let computerScore = 0;

playGame();

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
    return prompt("Rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        console.log("You lose this round! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else {
        console.log("It's a tie! Both chose " + humanChoice + ". No score.")
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors!");

    humanScore = 0;
    computerScore = 0;
    let humanChoice;
    let computerChoice;

    for (let i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Current scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);
    }

    console.log("The game is over!\nFinal scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);
    
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
}