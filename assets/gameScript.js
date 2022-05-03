
//Open variables containing 0 to be ammended with results later 
var userScore = 0;
var compScore = 0;

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
    
//Testing the results with else if statements//   
// rock = 1, paper = 2, scissors = 3 //
    if (choice == '1' && cpuchoice == '2'){
        ++compScore;  
        text = 'Computer chooses Paper. Computer Wins';
    } else if (choice =='2' && cpuchoice == '1'){
        ++userScore;
        text = 'Computer chooses Rock. User wins';
    } else if (choice =='3' && cpuchoice == '1'){
        ++compScore;
        text = 'Computer chooses Rock. Computer Wins';
    } else if (choice == '1' && cpuchoice == '3'){   
        ++userScore;
        text = 'Computer chooses Rock. User Wins';
    } else if (choice == '2' && cpuchoice == '3'){ 
        ++compScore;
        text = 'Computer chooses scissors. Computer Wins';
    } else if (choice == '3' && cpuchoice == '2'){
        ++userScore;
        text = 'Computer chooses paper. User Wins';
    } else if (choice == cpuchoice) {      
        text = 'Draw! Play again';
    } else { 
        text = "Computer scores. Take your next pick";
        ++compScore;
    }

/** Get elements and update HTML in the Dom */    
document.getElementById('result-display').innerHTML = text; 
document.getElementById('user-score').innerHTML = userScore;
document.getElementById('computer-score').innerHTML = compScore;  
    
}
/** Resets scores to zero  */
function resetGame(event) {
      userScore =0;
      compScore = 0;
      document.getElementById('user-score').innerHTML = userScore;
      document.getElementById('computer-score').innerHTML = compScore; 
      
    }
