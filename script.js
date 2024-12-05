let options = ['r','p','s'];
let computerChoiceVar;
let input = document.querySelector("#user-input");
let button = document.querySelector("#user-button");
let boxError = document.querySelector('#error-box');
let userChoiceVar;
let matchResult;
let computerScore = 0;
let userScore = 0;

function computerChoice() {
    computerChoiceVarInt = Math.floor(Math.random()*3)
    computerChoiceVar = options[computerChoiceVarInt]
    document.querySelector('#comp-choice').textContent = `Computers choice: ${computerChoiceVar}`
}

userChoice()



function userInputValidation(varToValidate) {
    if (options.includes(varToValidate) == false) {
        boxError.textContent = 'Error, please enter a valid option' 
    } else {
        boxError.textContent = '' 
    }
}

function userChoice() {
    button.addEventListener("click", () => {
    userChoiceVar = input.value.toLowerCase()
    userInputValidation(userChoiceVar)
    computerChoice()
    whoWins()
    input.value = "";
    input.focus();
    })
}

function whoWins() {
    if (userChoiceVar == computerChoiceVar) {
        matchResult = 'Tie'
    } else if (userChoiceVar == 'r' && computerChoiceVar == 'p') {
        matchResult = 'You lose'
        computerScore++
    } else if (userChoiceVar == 'p' && computerChoiceVar == 'r') {
        matchResult = 'You win'
        userScore++
    } else if (userChoiceVar == 's' && computerChoiceVar == 'p') {
        matchResult = 'You win'
        userScore++
    } else if (userChoiceVar == 's' && computerChoiceVar == 'r') {
        matchResult = 'You lose'
        computerScore++
    } else if (userChoiceVar == 'r' && computerChoiceVar == 's') {
        matchResult = 'You win'
        userScore++
    } else if (userChoiceVar == 'p' && computerChoiceVar == 's') {
        matchResult = 'You lose'
        computerScore++
    }
    document.querySelector('#result').textContent = `Result: ${matchResult}`
    document.querySelector('#user-score').textContent = `Your Score: ${userScore}`
    document.querySelector('#comp-score').textContent = `Computer Score: ${computerScore}`
}