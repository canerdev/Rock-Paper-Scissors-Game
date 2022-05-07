let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let choices = document.querySelectorAll('.img')
let roundDOM = document.querySelector('#round')

var userScore = 0
var computerScore = 0
var round = 0

function getChoices() {
    let userChoice;
    choices.forEach(img => {
        img.addEventListener('click', (e) => {
            // increase the round 
            document.querySelector('.headers>h2').style.visibility = 'inherit'
            round++
            roundDOM.innerHTML = round

            // computer's choice
            let computerChoice;
            const getComputerChoice = () => {
                const choicesArr = ['rock', 'paper', 'scissors']
                computerChoice = choicesArr[Math.floor(Math.random() * 3)]
                // console.log(computerChoice)

                // make it visible first
                document.querySelector('.choicePC').style.visibility = 'inherit'

                document.querySelector('#computerChoice').innerHTML = computerChoice
            }

            getComputerChoice()

            userChoice = e.target.alt

            // display it on screen
            document.querySelector('.choiceUser').style.visibility = 'inherit'
            document.querySelector('#userChoice').innerHTML = userChoice

            // restart the game
            const restartGame = () => {
                userScore = 0
                computerScore = 0
                round = 0

                // make the choices unvisible
                document.querySelector('.choicePC').style.visibility = 'hidden'
                document.querySelector('.choiceUser').style.visibility = 'hidden'
            }

            // check if there is a winner
            if(userScore === 3 && computerScore < 3) {
                alert('USER WINS')   
                restartGame()             
            } else if (userScore < 3 && computerScore === 3) {
                alert('COMPUTER WINS')
                restartGame() 
            } 

            // user wins
            if (userChoice === 'rock' && computerChoice === 'scissors') {
                userScore++
                document.querySelector('#userScore').innerHTML = userScore
            }
            if (userChoice === 'scissors' && computerChoice === 'paper') {
                userScore++
                document.querySelector('#userScore').innerHTML = userScore
            }
            if (userChoice === 'paper' && computerChoice === 'rock') {
                userScore++
                document.querySelector('#userScore').innerHTML = userScore
            }

            // computer wins
            if (userChoice === 'rock' && computerChoice === 'paper') {
                computerScore++
                document.querySelector('#computerScore').innerHTML = computerScore
            }
            if (userChoice === 'scissors' && computerChoice === 'rock') {
                computerScore++
                document.querySelector('#computerScore').innerHTML = computerScore
            }
            if (userChoice === 'paper' && computerChoice === 'scissors') {
                computerScore++
                document.querySelector('#computerScore').innerHTML = computerScore
            }

            // check if there is a winner
            if(userScore === 3 && computerScore < 3) {
                alert('USER WINS')   
                restartGame()             
            } else if (userScore < 3 && computerScore === 3) {
                alert('COMPUTER WINS')
                restartGame() 
            }
        })
    })
}

getChoices()