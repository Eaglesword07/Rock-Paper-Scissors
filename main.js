const getComputerChoice = () => {

    const choices = ["rock", "paper", "scissors"];

    let answer = Math.floor(Math.random() * choices.length);
    return (choices[answer]);
}

const gamePlay = (playerSelection, computerSelection) => {
    let result = ""

    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors")) {
        result = "Player and Computer Chose Same Hand, This is A Draw";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (computerSelection == "rock" && playerSelection == "paper")) {
        result = "Paper covers Rock";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "scissors")) {
        result = "Rock covers Scissors";
    } else if ((playerSelection == "paper" && computerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "scissors")) {
        result = "Scissors covers Paper";
    }

    return result;
}

const playerSelection = prompt("rock, paper or scissors??");
const computerSelection = getComputerChoice();

console.log(gamePlay(playerSelection, computerSelection));





