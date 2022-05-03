
//Open variables containing 0 to be ammended with results later 
var userScore = 0;
var compScore = 0;
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
    console.log("Computer Chooses:", randomNumber);
    return randomNumber;
    randomNumber = cpuchoice;
}

/**  create play function */
function play(choice) {
    let cpuchoice = generateComputerChoice();
    let text;
//Testing the results with else if statements//   
    if (choice == '1' && cpuchoice == '2'){
        compScore +=1;
        text = 'Computer chooses Paper. Computer Wins';
    } else if (choice =='2' && cpuchoice == '1'){
        userScore +=1;
        text = 'Computer chooses Rock. User wins';
    } else if (choice =='3' && cpuchoice == '1'){
        compScore += 1;
        text = 'Computer chooses Rock. Computer Wins';
    } else if (choice == '1' && cpuchoice == '3'){   
        userScore += 1;
        text = 'Computer chooses Rock. User Wins';
    } else if (choice == '2' && cpuchoice == '3'){ 
        compScore += 1;
        text = 'Computer chooses scissors. Computer Wins';
    } else if (choice == '3' && cpuchoice == '2'){
        userScore +=1;
        text = 'Computer chooses paper. User Wins';
    } else if (choice == cpuchoice) {      
        text = 'Draw! Play again';
    } else { 
        text = "Computer scores. Take your next pick";
        compScore+=1;
    }

document.getElementById('result-display').innerHTML = text;
document.getElementById('user-score').innerHTML = userScore;
document.getElementById('computer-score').innerHTML = compScore;  
    
}