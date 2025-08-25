// Initialize scores
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const midSection = document.querySelector(".mid-section");
const messageAndButton = document.querySelector("#message-and-button");
const scoreAndChoice = document.querySelector(".score-and-choice");
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
            console.log('rock button pressed');
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
        case 'paper-btn':
            // What happens when paper button is clicked
            humanChoice = 'Paper';
            console.log('paper button pressed');
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
        case 'scissors-btn':
            // What happens when scissors button is pressed
            humanChoice = 'Scissors';
            console.log('scissors button pressed');
            displayYouChose(humanChoice, youChose, youChoseBtn);
            break;
    }
});

scoreAndChoice.addEventListener('click', (event) => {
    console.log('THIS one worked');
    playRound();
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
        console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        console.log("You lose this round! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else {
        console.log("It's a tie! Both chose " + humanChoice + ". No score.")
    }
    messageAndButton.removeChild(youChose);
    messageAndButton.removeChild(youChoseBtn);
}