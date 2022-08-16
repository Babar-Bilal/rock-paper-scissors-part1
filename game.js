// ODIN Project
// Game of Rock, Paper or Scissors (New Version)

const shoots = ['rock', 'paper', 'scissors']
const winners = []

const game = () => {
    for (let i = 1; i <= 5; i++){
        playRound(i)
    }
    logWinner()  
}

const playRound = (round) => {
    const playerSelect = playerChoice()
    const computerSelect = computerChoice()
    const winner = winnerCheck(playerSelect, computerSelect)
    winners.push(winner)
    logRounds(playerSelect, computerSelect, winner, round) 
}

const validationInput = (choice) => {
    return shoots.includes(choice)
}

const playerChoice = () => {
    let input = prompt('Type Rock, Paper or Scissors')
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors')
    }
    input = input.toLowerCase()
    let check = validationInput(input)
        while (check == false) {
            input = prompt('Spelling incorrect. Type Rock, Paper or Scissors')
            while (input == null) {
            input = prompt('Type Rock, Paper or Scissors')
            }
            input = input.toLowerCase()
            check = validationInput(input)        
    }
    return input
}

const computerChoice = () => {
    return shoots [Math.floor(Math.random() * shoots.length)]
}

const winnerCheck = (playerHand, computerHand) => {
    if (playerHand === computerHand) {
        return 'Tie'
    }   else if ((playerHand === 'rock' && computerHand === 'scissors')||
                 (playerHand === 'paper' && computerHand === 'rock')||
                 (playerHand === 'scissors' && computerHand === 'paper')
            )   {
                return 'Player'
            }   {
                return 'Computer'
            }
}

const logRounds = (playerChoice, computerChoice, winner, round) => {
    console.log('Round: ', round)
    console.log('Player Chose: ', playerChoice)
    console.log('Computer Chose: ', computerChoice)
    console.log(winner, 'won the Round')
    console.log('------------------------------------')
}

const logWinner = () => {
    let playerWins = winners.filter((item) => item == 'Player').length
    let computerWins = winners.filter((item) => item == 'Computer').length
    let ties = winners.filter((item) => item == 'Tie').length
    console.log('Player Wins: ', playerWins)
    console.log('Computer Wins: ', computerWins)
    console.log('Ties: ', ties)
}

game()