//Get user and computer scores 
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('computer-score');
//Get game button choices 
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
//Get result display message
let resultDisplay = document.getElementById('result-display')

//Add event listeners for buttons
rock.addEventListener('click',generateComputerChoice);   //add function
paper.addEventListener('click',generateComputerChoice );   //add function
scissors.addEventListener('click',generateComputerChoice ); //add function

/**Generate random number for getting computer input */ 
function generateComputerChoice(event) {
    let randomNumber = Math.floor(Math.random() * 3) +1 ;
    console.log(randomNumber);
}