const infoBox = document.querySelector('#info-box');
const resultsBox = document.querySelector('#result');
const button = document.querySelector('#button');
button.onclick = () => startGame();

let gameString = document.querySelector('#gameNum');
gameString.innerHTML = 0

let game = -1;
let playerScore = 0;
let computerScore = 0;

let playerScoreBoard = document.querySelector('#pScore');
let computerScoreBoard = document.querySelector('#cScore');

function startGame(){
    game = 0;
    playerScore = 0;
    computerScore = 0;
    gameString.innerHTML = 1;
    infoBox.classList.add('hidden');
    computerScoreBoard.classList.remove('hidden');
    playerScoreBoard.classList.remove('hidden');
    playerScoreBoard.innerHTML = playerScore;
    computerScoreBoard.innerHTML = computerScore;
    button.value = 'Reset Game';
    resultsBox.classList.add('hidden');
}

document.querySelector('#paper').addEventListener('click', function() {
    (game < 0) ? startGameMessage() : setChoices('paper');
});
document.querySelector('#rock').addEventListener('click', function() {
    (game < 0) ? startGameMessage() : setChoices('rock');
});
document.querySelector('#scissors').addEventListener('click', function() {
    (game < 0) ? startGameMessage() : setChoices('scissors');
});



function startGameMessage(){
    let warningBox = document.querySelector('#warning-container');
    let closeButton = document.querySelector('#warning-close')
    let warningText = document.querySelector('#warning-container span');
    if(game === -2) {
        warningText.textContent = 'Please start the game again!';
        warningBoxPopUp(warningBox, closeButton);
    } else {
        warningBoxPopUp(warningBox, closeButton);
    }
}

function warningBoxPopUp(warningBox, closeButton) {
    warningBox.classList.remove('hidden');
        closeButton.addEventListener('click', function(){
            warningBox.classList.add('hidden');
        })
}

function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'paper';
            break;
        case 1:
            return 'rock';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

function setChoices(choice) {
    let playerChoice = choice;
    round(playerChoice, computerChoice());
};

function round(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {     
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = 'DRAW! You both chose ' + computerChoice;
        game++;
    } else {
        if(playerChoice === 'rock'){
            switch (computerChoice) {
                case 'paper':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice);                
            }
        } else if(playerChoice === 'paper', playerChoice, computerChoice) {
            switch (computerChoice) {
                case 'scissors':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice);               
            }
        } else {
            switch (computerChoice) {
                case 'rock':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice); 
            }
        }
    }
    evaluateGame();
};

function setPlayerScores(){
    playerScoreBoard.innerHTML = playerScore;
    computerScoreBoard.innerHTML = computerScore;
}

function addWin(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = 'You won! ' + playerChoice + ' beats ' + computerChoice;
        playerScore++;
        game++;    
    } else {
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = winner + ' won! ' + computerChoice + ' beats ' + playerChoice;
        computerScore++;
        game++; 
    }
    setPlayerScores();
}

function endGame(){
    button.value = 'Start Game';
    game = -2;
    if (playerScore > computerScore) {
        resultsBox.classList.remove('hidden');
        resultsBox.innerHTML = '<p>You win!</p>';
    } else {
        resultsBox.classList.remove('hidden');
        resultsBox.innerHTML = '<p>You lost! Better luck next time!</p>';
    }
}

function evaluateGame(){
    if(playerScore === 5 || computerScore === 5){
        endGame()
    }

    if(game > 0){
        gameString.innerHTML = game;
    }
}