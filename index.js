const playerEl = document.getElementById('player')
const computerEl = document.getElementById('computer')
const resultEl = document.getElementById('result')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')



let playerChoice = ""
let computerChoice = ""
let gameResult = ""

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
    if(playerChoice=='Rock' && computerChoice=='Scissors'){
        gameResult="Player Won"
    }
    else if(playerChoice=='Scissors' && computerChoice=='Rock'){
        gameResult="Computer Won"
    }
    else if(playerChoice=='Scissors' && computerChoice=='Paper'){
        gameResult="Player Won"
    }
    else if(playerChoice=='Paper' && computerChoice=='Scissors'){
        gameResult="Computer Won"
    }
    else if(playerChoice=='Paper' && computerChoice=='Rock'){
        gameResult="Player won"
    }
    else if(playerChoice=='Rock' && computerChoice=='Paper'){
        gameResult="Computer won"
    }
    else if(playerChoice==computerChoice){
        gameResult="It is a tie!"
    }
}

rockBtn.addEventListener('click',()=>{
    playerChoice = 'Rock';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`


})

scissorsBtn.addEventListener('click',()=>{
    playerChoice = 'Scissors';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`
})

paperBtn.addEventListener('click',()=>{
    playerChoice = 'Paper';
    playerEl.innerText = `Player: ${playerChoice}`
    computerChoose()
    computerEl.innerText = `Computer: ${computerChoice}`
    resultCalculation()
    resultEl.innerText = `Result is: ${gameResult}`
})
