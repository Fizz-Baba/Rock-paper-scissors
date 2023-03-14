const totalScore = {
  computerScore: 0, 
  playerScore: 0
 }

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  rpsChoices = ["Rock", "Paper", "Scissors"]
  randomChoices = Math.floor (Math.random () * rpsChoices.length)
  return rpsChoices [randomChoices]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let result
  let playerScoreCount
  let computerScoreCount
if (playerChoice === computerChoice){
  result = "it's a tie!", playerScoreCount = 0, computerScoreCount = 0
}
else if ( playerChoice === "Rock" && computerChoice === "Scissors" ){
  result = "You won!!!", playerScoreCount = 1, computerScoreCount = 0
}
else if (playerChoice === "Scissors" && computerChoice === "Paper"){
  result = "You won!!!", playerScoreCount = 1, computerScoreCount = 0
}
else if (playerChoice === "Paper" && computerChoice === "Rock"){
  result = "You won!!!", playerScoreCount = 1, computerScoreCount = 0
}
else {
  result = "You lose!", playerScoreCount = 0,  computerScoreCount = 1
} 
  return {result, playerScoreCount, computerScoreCount}
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(result, playerScoreCountVar, computerScoreCountVar, playerChoice, computerChoice) {
 const resultDiv = document.getElementById ("hands")
 const handsDiv = document.getElementById ("result")
 const playerScoreDiv = document.getElementById ("player-score")
 const computerScoreDiv = document.getElementById ("computer-score")
 const allResult = getResult(playerChoice, computerChoice)
  resultDiv.innerText = allResult.result
  handsDiv.innerText = `Player: ${playerChoice} | computer:${computerChoice}`
  playerScoreDiv.innerText = `Player score: ${playerScoreCountVar}`
  computerScoreDiv.innerText = `computer score: ${computerScoreCountVar}`
}


function onClickRPS(playerChoice) {
  // console.log ({playerChoice})
  const computerChoice = getComputerChoice()
  // console.log ({computerChoice})
  const allResult = getResult(playerChoice, computerChoice)
  const playerScoreCountVar = totalScore.playerScore += allResult.playerScoreCount
  const computerScoreCountVar = totalScore.computerScore += allResult.computerScoreCount
  // console.log (allResult)
  // console.log ({playerScoreCountVar})
  // console.log ({computerScoreCountVar})
  // console.log (allResult.result)
  showResult (result, playerScoreCountVar, computerScoreCountVar, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton")
  rpsButtons.forEach (rpsButton => {
    rpsButton.onclick = () => {
      onClickRPS(rpsButton.value) // this value is the one set in the html document. its taking the place of playerChoice which as been passed as an argument in the onClickRPS function.
    const endGameButton = document.getElementById ("endGameButton")
      endGameButton.onclick = () => {
      endGame()
      }
    }
  })
}

// ** endGame function clears all the text on the DOM **
function endGame() {
 // totalScore ["playerScore"] = 0
 // totalScore ["computerScore"] = 0
  totalScore.playerScore = 0
  totalScore.computerScore = 0
  
  
 const handsDiv = document.getElementById ("hands")
 const resultDiv = document.getElementById ("result")
 const playerScoreDiv = document.getElementById ("player-score")
 const computerScoreDiv = document.getElementById ("computer-score")
  
 resultDiv.innerText = ""
 handsDiv.innerText = ""
 playerScoreDiv.innerText = ""
 computerScoreDiv.innerText = ""
}

playGame()