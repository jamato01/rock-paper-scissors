// Initialize scores
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const midSection = document.querySelector(".mid-section");
const messageAndButton = document.querySelector("#message-and-button");


// DOM Event Listeners
midSection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock-btn':
            // What happens when rock button is clicked
            humanChoice = 'Rock';
            console.log('rock button pressed');
            displayYouChose(humanChoice);
            break;
        case 'paper-btn':
            // What happens when paper button is clicked
            humanChoice = 'Paper';
            console.log('paper button pressed');
            displayYouChose(humanChoice);
            break;
        case 'scissors-btn':
            // What happens when scissors button is pressed
            humanChoice = 'Scissors';
            console.log('scissors button pressed');
            displayYouChose(humanChoice);
            break;
        case 'you-chose-button':
            console.log('The button was pressed.');
    }
});

// Helper Functions
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

function displayYouChose(choice) {
    const youChose = document.getElementById('you-chose');
    if (youChose) {
        youChose.textContent = `You chose ${choice}!`;
    } else{
        const youChose = document.createElement("div");
        youChose.setAttribute("id", "you-chose");
        youChose.textContent = `You chose ${choice}!`;

        const youChoseBtn = document.createElement("button");
        youChoseBtn.setAttribute("id", "you-chose-button");
        youChoseBtn.textContent = "Who will win?";

        messageAndButton.appendChild(youChose);
        messageAndButton.appendChild(youChoseBtn);
    }
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

// This function may need to go
function playGame() {

    humanScore = 0;
    computerScore = 0;
    let humanChoice;
    let computerChoice;

    for (let i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
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