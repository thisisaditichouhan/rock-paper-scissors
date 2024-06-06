const playerEl = document.getElementById('player')
const computerEl = document.getElementById('computer')
const resultEl = document.getElementById('result')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const computerWinsEl = document.getElementById('computerWins')
const playerWinsEl = document.getElementById('playerWins')
const tiesEl = document.getElementById('ties')
const resetBtn = document.getElementById('reset')



let playerChoice = ""
let computerChoice = ""
let gameResult = ""
let ties = 0;
let playerWins = 0;
let computerWins= 0;

function computerChoose(){
    let randomChoice = Math.floor(Math.random()*3)+1;
    if (randomChoice==1){
        randomChoice='Rock'
    }
    else if(randomChoice==2){
        randomChoice='Paper'
    }
    else{
        randomChoice='Scissors'
    }
    computerChoice=randomChoice
    
}

function resultCalculation(){
    if(playerChoice==='Rock' && computerChoice==='Scissors'){
        gameResult="Player won"
    }
    else if(playerChoice==='Scissors' && computerChoice==='Rock'){
        gameResult="Computer Won"
    }
    else if(playerChoice==='Scissors' && computerChoice==='Paper'){
        gameResult="Player won"
    }
    else if(playerChoice==='Paper' && computerChoice==='Scissors'){
        gameResult="Computer won"
    }
    else if(playerChoice==='Paper' && computerChoice==='Rock'){
        gameResult="Player won"
    }
    else if(playerChoice==='Rock' && computerChoice==='Paper'){
        gameResult="Computer won"
    }
    else if(playerChoice===computerChoice){
        gameResult="It is a tie!"
    }
    if(gameResult==="Computer won"){
        computerWins++
    }
    else if(gameResult==="Player won"){
        playerWins++
    }
    else if(gameResult==="It is a tie!"){
        ties++
    }
}

rockBtn.addEventListener('click',()=>{
    playerChoice = 'Rock';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`
    computerWinsEl.innerText = `Computer: ${computerWins}`
    playerWinsEl.innerText = `Player: ${playerWins} `
    tiesEl.innerText=` Tie: ${ties}`


})

scissorsBtn.addEventListener('click',()=>{
    playerChoice = 'Scissors';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`
    computerWinsEl.innerText = `Computer: ${computerWins}`
    playerWinsEl.innerText = `Player: ${playerWins} `
    tiesEl.innerText=` Tie: ${ties}`
})

paperBtn.addEventListener('click',()=>{
    playerChoice = 'Paper';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`
    computerWinsEl.innerText = `Computer: ${computerWins}`
    playerWinsEl.innerText = `Player: ${playerWins} `
    tiesEl.innerText=` Tie: ${ties}`
})

resetBtn.addEventListener('click',()=>{
    playerChoice = ""
    computerChoice = ""
    gameResult = ""
    ties = 0;
    playerWins = 0;
    computerWins= 0;
    playerEl.innerText = `Player: Waiting for the player to make a choice`
    
    computerEl.innerText = `Computer's choice will reflect here`
   
    resultEl.innerText = `Result: Play first`
    computerWinsEl.innerText = `Computer: ${computerWins}`
    playerWinsEl.innerText = `Player: ${playerWins} `
    tiesEl.innerText=` Tie: ${ties}`
})
