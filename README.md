# Eoin Aherne - JS based Rock, Paper, Scissors game 
A rock, paper, scissors game. Created using HTML, CSS &amp; JavaScript. I aimed to create a dynamic and responsive front end web application 
that takes input from the user, creates a randomised computer choice, compares them together and determines a winner. 
This application will have the ability to keep player scores, displaying them on a scoreboard. 
Display a message telling who wins each round after the round is played, 
also giving the option reset the game if the user wishes     


## Preview
![responsiveGame](https://user-images.githubusercontent.com/98334583/171820250-3177cab1-d6ce-4583-b29f-0adddbff341e.png)

## Features
### The Game Area
The area in which the game is played. This piece of the screen is populated by two animated parts, one being the interactive game controls, 
represented by the hands. When a player loads the game they will be drawn to the animated flashing wording, which reads 'Make Your Selection'.
Below this there are 3 hand icons. These icons are text-based and are manipulated by CSS to change colour when hovered and clicked up to make selection

![gamearea](https://user-images.githubusercontent.com/98334583/171824452-6d722236-ae46-4576-be65-d391b3eb4b18.png)


### The Scoreboard
The scroeboard is used to tally the score. Each time a round is played, once a winner is decdided upon for said round. The player or computer, depending on who won the round, will have 1 point added to there score 

### Reset Button
A button that resets the score to 0, letting the game start again without having to reload the entire page. 
The function below updates the scores to 0, then resets them in the DOM thru the HTMLs innertext, when the event trigger is clicked 

![jsResetImg](https://user-images.githubusercontent.com/98334583/171822980-fdfdfa51-0719-4d34-9622-43c1c905d2da.png)


## Testing
Upon completion of my game. I deployed it to GitHub through Pages. I tested the program a couple of hundred times to see if the combinations of human/computer selections may cause some sort of bug or errors in the running of the program. I realised that certain hands would not have and text attached to them to tell who had won the round. It wasn't a difficult fix. I emailed the link to some family and friends, asking them to try it our for fun and to provide some feedback.  
The general concencus is that they thought it was fun and worked well with no reported bugs.

### Validator Testing
- HTML
    - No errors were returned when passing through the official W3C Validator
- CSS
    - No errors were found when passing through the official (Jigsaw) validator
- JavaScript
    - No errors were found when passing through the official Jshint validator
    - There are 4 functions in this file
    - The largest function has 20 statements in it.
    - The most complex function has a cyclomatic complexity value of 14  
### Deployment
I deployed my project using GitHub Pages. The site can be found live at [https://eoinaherne.github.io/portfolio-project-2/](https://eoinaherne.github.io/portfolio-project-2/)


