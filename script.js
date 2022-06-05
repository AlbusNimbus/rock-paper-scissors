


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'TIE';
    }
    if ( (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')){
        return 'WIN';
    }
    return 'LOSS';
}


function getComputerSelection(){
    return getRandomChoice();
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))


function handleClick(playerSelection){
    console.log(playRound(playerSelection,getComputerSelection()));
    
}