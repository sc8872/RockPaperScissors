const userDisplay = document.getElementById('user-choice')
const computerDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')

const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

//here we will set user
possibleChoice.forEach(possibleChoice =>  possibleChoice.addEventListener('click',(e) => {
  userChoice = e.target.id
  userDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))


//here we will set computer
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() *3) + 1 // or use possilbeChoice.length
  //console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = '🤟'
  }

  if (randomNumber === 2) {
    computerChoice = '✌️'
  }

  if (randomNumber === 3) {
    computerChoice = '✋'
  }

  computerDisplay.innerHTML = computerChoice
}


// here we set result
function getResult() {
  if (computerChoice === userChoice){
    result = 'Draw'
  }
  if (computerChoice === '🤟' && userChoice === "✋"){
    result = '🙌 '
  }
  if (computerChoice === '🤟' && userChoice === "✌️"){
    result = '😬'
  }
  if (computerChoice === '✋' && userChoice === "✌️"){
    result = '🙌 '
  }
  if (computerChoice === '✋' && userChoice === "🤟"){
    result = '😬'
  }
  if (computerChoice === '✌️' && userChoice === "🤟"){
    result = '🙌 '
  }
  if (computerChoice === '✌️' && userChoice === "✋"){
    result = '😬'
  }

  resultDisplay.innerHTML = result
}