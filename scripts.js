const h2 = document.querySelector('h2');
const pScore= document.querySelector('#pScore');
const cScore= document.querySelector('#cScore');
const dScore= document.querySelector('#dScore');
const p = document.querySelector('#result');
const button = document.querySelector('input');
p.classList.remove('results');

let playerScore = 0;
let computerScore = 0;
let drawnGames = 0;


function playRound(player, computer) {

    if(player === computer)
    { 
        p.innerHTML = `DRAW! You both chose ${player}`;
        drawnGames += 1;
        return ' ';       
    }

    if(player === 'rock') {
        if(computer === 'paper') {
            computerScore += 1; 
            p.innerHTML = `You lost! ${computer} beats ${player}.`
        }
        else {
            playerScore += 1; 
            p.innerHTML = `You win! ${player} beats ${computer}!`
        };
    } else if (player === 'paper') {
        if (computer === 'scissors') {
            computerScore += 1; 
            p.innerHTML = `You lost! ${computer} beats ${player}.`
        }
        else {
            playerScore += 1; 
            p.innerHTML = `You win! ${player} beats ${computer}!`
        };
    } else {
        if(computer === 'rock') {
            computerScore += 1; 
            p.innerHTML = `You lost! ${computer} beats ${player}.`
        }
        else {
            playerScore += 1; 
            p.innerHTML = `You win! ${player} beats ${computer}!`
        };
    }
}

let computerPlay = function() {
    let number = Math.floor(Math.random() * 3);
    return (number === 0) ? 'rock' :
    (number === 1) ? 'paper' : 'scissors';
}

let playerSelect = function() {
    let choice = prompt('Rock, Paper, Scissors?').toLowerCase();
    if(!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) {
        alert('You have to choose one of the options!');        
        playerSelect();
    }
    return choice;
}

function playGame() {
    let i = 1;    
    playerScore = 0;
    computerScore = 0;
    drawnGames = 0;
    while(!(playerScore === 5 || computerScore === 5)){
        playRound(playerSelect(), computerPlay());        
        h2.textContent = 'Game: ' + i; 
        p.classList.add('results');
        cScore.textContent = ' ' + computerScore;
        pScore.textContent = ' ' + playerScore;
        dScore.textContent = ' ' + drawnGames;
        i++;
    }



    if(playerScore > computerScore) {
        p.innerHTML = 'You won the game!';
    } else {
        p.innerHTML = 'You lost the game! Better luck next time!';

    }
}

button.addEventListener('click', playGame);
