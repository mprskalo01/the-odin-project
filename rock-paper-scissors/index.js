let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choices[randomChoice]
}

const getHumanChoice = () => {
  let humanChoice = prompt(
    'Make your choice. Rock, Paper or Scissors'
  ).toLowerCase()
  if (
    humanChoice != 'rock' &&
    humanChoice != 'paper' &&
    humanChoice != 'scissors'
  ) {
    do {
      humanChoice = prompt(
        'Wrong input. Do you choose ROCK, PAPER or SCISSORS?'
      ).toLowerCase()
    } while (
      humanChoice != 'rock' &&
      humanChoice != 'paper' &&
      humanChoice != 'scissors'
    )
  } else {
    return humanChoice
  }
}

const playRound = (humanSelection, computerSelection) => {
  if (humanSelection == 'rock' && computerSelection == 'paper') {
    console.log('You Lose! Paper beats rock.')
    computerScore += 1
  } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
    console.log('You win! Rock beats scissors.')
    humanScore += 1
  } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
    console.log('You lose! Scissors beats paper.')
    computerScore += 1
  } else if (humanSelection == 'paper' && computerSelection == 'rock') {
    console.log('You win! Paper beats rock.')
    humanScore += 1
  } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
    console.log('You lose! Rock beats scissors.')
    computerScore += 1
  } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
    console.log('You Win! Scissors beats paper.')
    humanScore += 1
  } else {
    console.log("It's a tie! You both made the same choice.")
  }
  console.log(humanScore, computerScore)
}

const playGame = () => {
  let i = 0
  while (i < 5) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    i++
  }
  if (humanScore > computerScore) {
    console.log(
      `Congratulations you win! Your score is ${humanScore} and the computers score is ${computerScore}`
    )
  } else if (humanScore < computerScore) {
    console.log(
      `Unfortunately you lose! Your score is ${humanScore} and the computers score is ${computerScore}`
    )
  } else {
    console.log(
      `A statistical anomally! You both have the same score of ${humanScore}`
    )
  }
}

playGame()
