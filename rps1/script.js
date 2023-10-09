function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return choices[0];
    } else if (randomNumber === 1) {
        return choices[1];
    } else {
        return choices[2];
    }
}

console.log(getComputerChoice());