
// First get out our variables
const buttons = document.querySelectorAll('div#buttons-container button');
const playerPoints = document.querySelector('#player-point');
const computerPoints = document.querySelector('#computer-point');
const outcome = document.querySelector('#outcome');
const finalResult = document.querySelector('#final-result');
const replayGame = document.querySelector('#replay');


// Loop through the buttons with forEach, assigning the right playerSelection,
// in this case using the e.target.id and computerSelection which is the getComputerChoice function
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        const playerSelection = (e.target.id);
        const computerSelection = getComputerChoice();
        // calling the gamePlay function to run the game once the button is pushed
        (gamePlay(playerSelection, computerSelection));
    })
});

// create a function to disable the buttons from playing once someone gets five points
const endGame = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

// reset game
replayGame.addEventListener('click', () => {
    location.reload()
});

// initiate score to zero and increment with every win for each player
let playerScore = 0;
let computerScore = 0;

//get computer's random choice
const getComputerChoice = () => {

    const choices = ["rock", "paper", "scissors"];

    let answer = Math.floor(Math.random() * choices.length);
    return (choices[answer]);
}

//Create the function for the gameplay
const gamePlay = (playerSelection, computerSelection) => {

    const outcomeParagraph = document.createElement('p');

    if ((playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")) {
        // add scores to both computer and player as we have a tie
        playerScore += 1;
        computerScore += 1;
        outcomeParagraph.innerText = `You and I Chose Same Hand, This is A Draw!`;

    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "scissors")) {
        // add a point for computer
        computerScore += 1;
        outcomeParagraph.innerText = `I Win! ${computerSelection} beats ${playerSelection}`;

    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
        //add points for player
        playerScore += 1;
        outcomeParagraph.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    // display the scores for each player on the DOM
    playerPoints.innerText = `Your Score: ${playerScore}`;
    computerPoints.innerText = `My Score: ${computerScore}`;
    outcome.appendChild(outcomeParagraph);


    // check for the first person to get to 5 points, declare the winner and end the game
    if (playerScore === 5) {
        const finalOutcome = document.createElement('h3');
        finalOutcome.innerText = `${playerScore} - ${computerScore} : Congratulations You Won The Game!`;
        finalResult.appendChild(finalOutcome);
        endGame();
    } else if (computerScore === 5) {
        const finalOutcome = document.createElement('h3');
        finalOutcome.innerText = `${computerScore} - ${playerScore} : Sorry, I won!`;
        finalResult.appendChild(finalOutcome);
        endGame();
    }
}


gamePlay();