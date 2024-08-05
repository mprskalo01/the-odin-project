let humanScore = 0
let computerScore = 0
const domHumanScore = document.querySelector('#humanScore')
const domComputerScore = document.querySelector('#computerScore')

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choices[randomChoice]
}

// const getHumanChoice = () => {
//   let humanChoice = prompt(
//     'Make your choice. Rock, Paper or Scissors'
//   ).toLowerCase()
//   if (
//     humanChoice != 'rock' &&
//     humanChoice != 'paper' &&
//     humanChoice != 'scissors'
//   ) {
//     do {
//       humanChoice = prompt(
//         'Wrong input. Do you choose ROCK, PAPER or SCISSORS?'
//       ).toLowerCase()
//     } while (
//       humanChoice != 'rock' &&
//       humanChoice != 'paper' &&
//       humanChoice != 'scissors'
//     )
//   } else {
//     return humanChoice
//   }
// }

const roundText = document.querySelector('#roundText')

const playRound = (humanSelection, computerSelection) => {
  if (humanSelection == 'rock' && computerSelection == 'paper') {
    roundText.textContent = 'You Lose! Paper beats rock.'
    computerScore += 1
  } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
    roundText.textContent = 'You win! Rock beats scissors.'
    humanScore += 1
  } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
    roundText.textContent = 'You lose! Scissors beats paper.'
    computerScore += 1
  } else if (humanSelection == 'paper' && computerSelection == 'rock') {
    roundText.textContent = 'You win! Paper beats rock.'
    humanScore += 1
  } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
    roundText.textContent = 'You lose! Rock beats scissors.'
    computerScore += 1
  } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
    roundText.textContent = 'You Win! Scissors beats paper.'
    humanScore += 1
  } else {
    roundText.textContent = "It's a tie! You both made the same choice."
  }
  domHumanScore.textContent = `Your score is: ${humanScore}`
  domComputerScore.textContent = `Computers score is: ${computerScore}`
}

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
let humanSelection = ''

rockButton.addEventListener('click', () => {
  humanSelection = 'rock'
})
paperButton.addEventListener('click', () => {
  humanSelection = 'paper'
})
scissorsButton.addEventListener('click', () => {
  humanSelection = 'scissors'
})

const playGame = () => {
  let i = 0
  const computerSelection = getComputerChoice()
  playRound(humanSelection, computerSelection)
  if (humanScore > computerScore && humanScore == 5) {
    roundText.textContent = `Congratulations you win! Your score is ${humanScore} and the computers score is ${computerScore}`
    humanScore = 0
    computerScore = 0
  } else if (humanScore < computerScore && computerScore == 5) {
    roundText.textContent = `Unfortunately you lose! Your score is ${humanScore} and the computers score is ${computerScore}`
    humanScore = 0
    computerScore = 0
  }
}
