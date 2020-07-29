let gameResult;
let playerMove;
let computerMove;
let totalScore;
let gameCounter = 0;
let playerCounter = 0;
let pcCounter =0;

const rounds = document.getElementById('rounds');
const winner = document.getElementById('winner');
const scores = document.getElementById('scores');
const playerRound = document.getElementById('playerRound');
const computerRound = document.getElementById('computerRound');
const roundWinner = document.getElementById('roundWinner');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const btnNewGame = document.getElementById('btnNewGame');
const buttons = document.querySelectorAll('.btn');

btnNewGame.style.display = 'none';

buttons.forEach ((btn) => {
    btn.addEventListener('click',() => {
        playerMove = btn.value;
        playRound(playerMove,computerPlay());
        rounds.style.display = "flex";  // at first this are hidden
        winner.style.display = "flex";
        scores.style.display = "flex";
    })
})

function computerPlay(){
    const possibleMoves = ["Rock","Paper","Scissors"];
    computerMove = possibleMoves[Math.round(Math.random()*(possibleMoves.length-1))];
    return computerMove;
}

//This is the function called everytime one of the buttons is pressed.
function playRound(playerSelection,computerSelection){
    // Fist we display what the move for each player is
    playerRound.innerText = "Player's move is: " + playerMove;
    computerRound.innerText = "Computer's Move is: " + computerMove;
    
    //Then we compare every selection to determine a winner
    if (playerSelection===computerSelection) {
        roundWinner.innerText = "It's a draw! No one wins this round.";
        gameResult = "draw";
        roundWinner.style.color="white";
        roundsCounter();
        return;
    } else if (playerSelection=="Rock") {
    if (computerSelection=="Scissors"){
        doPlayerWins()
        return;
    } else if (computerSelection=="Paper"){
        doPCWins()
        return;
    }
    } else if (playerSelection=="Paper"){
    if (computerSelection=="Rock"){
        doPlayerWins()
        return;
    } else if (computerSelection=="Scissors"){
        doPCWins()
        return;
    }
    } else if (playerSelection=="Scissors"){
    if (computerSelection=="Paper"){
        doPlayerWins()
        return;
    } else if (computerSelection=="Rock"){
        doPCWins()
        return;
    }
    } 
}

//This are the functions called when  playRound() determines who won.
function doPlayerWins(){
    roundWinner.innerText = "Player wins this round!.";
    roundWinner.style.color="green";
    gameResult = "player";
    roundsCounter();
}
function doPCWins(){
    roundWinner.innerText = "PC wins this round!.";
    roundWinner.style.color="red";
    gameResult = "computer";
    roundsCounter();
}

//This counts how many games each player has won
function roundsCounter(){
    gameCounter+=1;
    switch(gameResult){
        case "player":
        playerCounter++;
        break;
        case "computer":
        pcCounter++;
        break
    }
    playerScore.innerText = "Player score: " + playerCounter;
    computerScore.innerText = "Computer score: " + pcCounter;

    // Here we trigger the end of game when someone reaches 5 wins
    if (playerCounter == 5 || pcCounter==5){
        buttons.forEach ((btn) =>{
        btn.disabled=true;
        })
        if (playerCounter>pcCounter){
            roundWinner.innerText = "GAME OVER! PLAYER WINS"
            roundWinner.style.color="green";
        } else if (playerCounter<pcCounter) {
            roundWinner.innerText = "GAME OVER! PC WINS"
            roundWinner.style.color="red";
         }
        btnNewGame.style.display = "flex";
        btnNewGame.addEventListener('click',()=>{
            startNewGame()
        })
    }
}

// Here we reset everything to how the game starts. 
function startNewGame(){
    buttons.forEach ((btn) =>{
    btn.disabled=false;
    })
    playerCounter=0;
    pcCounter=0;
    rounds.style.display = "none";  // hide this as when the game begins
    winner.style.display = "none";
    scores.style.display = "none";
    btnNewGame.style.display="none"; 
}