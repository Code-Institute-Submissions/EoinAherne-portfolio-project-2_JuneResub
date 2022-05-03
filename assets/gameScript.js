//Get user and computer scores 
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('computer-score');
//Get game button choices 
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
//Get result display message
let resultDisplay = document.getElementById('result-display')
// Get buttons as an array
let buttons = document.getElementsByClassName('.btn') 


/**Generate random number for getting computer input */ 
function generateComputerChoice(event) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
}

/**  create play function */
function play(choice) {
    let cpuchoice = generateComputerChoice();
    console.log(choice);
}