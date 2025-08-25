// Initialize scores
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const container = document.querySelector('.container');
const midSection = document.querySelector(".mid-section");
const messageAndButton = document.querySelector("#message-and-button");
const scoreAndChoice = document.querySelector(".score-and-choice");
const youScore = document.querySelector("#you-score");
const compScore = document.querySelector("#comp-score");
const weaponsList = document.querySelector('#weapons-list');
const weaponHeader = document.querySelector('#weapon-header');
midSection.appendChild(weaponsList);
container.prepend(weaponHeader);
const youChose = document.createElement("div");
youChose.setAttribute("id", "you-chose");
const youChoseBtn = document.createElement("button");
youChoseBtn.setAttribute("id", "you-chose-button");


// DOM Event Listeners
midSection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock-btn':
            // What happens when rock button is clicked
            humanChoice = 'Rock';
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
        case 'paper-btn':
            // What happens when paper button is clicked
            humanChoice = 'Paper';
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
        case 'scissors-btn':
            // What happens when scissors button is pressed
            humanChoice = 'Scissors';
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
    }
});

scoreAndChoice.addEventListener('click', (event) => {
    let target = event.target;
    buttonText = target.textContent;

    switch(buttonText) {
        case 'Who will win?':
            playRound();
            break;
        case 'Next Round':
            initializeRound();
            break;
        case 'Play Again?':
            humanScore = 0;
            computerScore = 0;
            compScore.textContent = `Computer's score: ${computerScore}`;
            youScore.textContent = `Your score: ${humanScore}`;
            initializeRound();
    }
})



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

function displayYouChose(choice, youChose, youChoseBtn) {

        youChose.textContent = `You chose ${choice}!`;
        youChoseBtn.textContent = "Who will win?";

        messageAndButton.appendChild(youChose);
        messageAndButton.appendChild(youChoseBtn);
}

function playRound() {
    humanChoice = youChose.textContent.slice(10,-1);
    computerChoice = getComputerChoice();
    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        youChose.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        youScore.textContent = `Your score: ${humanScore}`;
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        youChose.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        compScore.textContent = `Computer's score: ${computerScore}`;
    } else {
        youChose.textContent = `It's a tie! No one scores.`
    }

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    } else {
        youChoseBtn.textContent = "Next Round";
        midSection.removeChild(weaponsList);
        container.removeChild(weaponHeader);
    } 
}

function initializeRound() {
    messageAndButton.removeChild(youChose);
    midSection.appendChild(weaponsList);
    container.prepend(weaponHeader);
    messageAndButton.removeChild(youChoseBtn);
}

function endGame() {
    if (humanScore > computerScore) {
        youChose.textContent = "You win the game!";
    } else {
        youChose.textContent = "You lose the game!";
    }
    youChoseBtn.textContent = "Play Again?";
    midSection.removeChild(weaponsList);
    container.removeChild(weaponHeader);
}