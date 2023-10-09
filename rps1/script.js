function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return choices[0];
            break;
        case 1:
            return choices[1];
            break;
        case 2:
            return choices[2];
            break;
    }

    // if (randomNumber === 0) {
    //     return choices[0];
    // } else if (randomNumber === 1) {
    //     return choices[1];
    // } else {
    //     return choices[2];
    // }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock';
        } else {
            return 'You win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock';
        } else {
            return 'You lose! Scissors beats Paper';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors';
        } else {
            return 'You win! Scissors beats Paper';
        }
    }
}

console.log(playRound('rock', getComputerChoice()));