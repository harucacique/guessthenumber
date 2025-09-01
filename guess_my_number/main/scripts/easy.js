// variaveis de modo

let maxNumber = 20
let chances = 5
// main screen
const back = document.querySelector('#back')
const inputNumber = document.getElementById("number");
const submitButton = document.getElementById("submit");
const triesHtml = document.getElementById("tries");
const topScoreHtml = document.getElementById("topScore");


let tries = chances
let numberGoal = Math.floor(Math.random() * maxNumber)+1

const blackScreen = document.getElementById("blackScreen");
const playAgainButton = document.getElementById("playAgain");
const endMatch = document.querySelector("#endMatch");
let winOrLose = document.getElementById("winOrLose");
let topScoreNumber = 0
let result = document.getElementById("result");

const numberNow = document.getElementById("numberNow");
const scoreEnd = document.getElementById("scoreWin");
const topScoreEnd = document.getElementById("topScoreWin")

//functions
function hideAdd(){
    endMatch.classList.add("hidden");
    blackScreen.classList.add("hidden");
}
function hideRemove(){
    endMatch.classList.remove("hidden");
    blackScreen.classList.remove("hidden");
}
function endGame(endGameResult){
    loadStatsEnd()
    if(endGameResult){
        winOrLose.innerHTML = `Congratulations, you win!`
        result.innerHTML = `You Win!`
        playAgainButton.innerHTML = `Normal Mode`
        localStorage.setItem("normal", "true")
    }else{
        winOrLose.innerHTML = `Congratulations, you lose noob`
        result.innerHTML = `you lose`
        playAgainButton.innerHTML = `Play Again`
        localStorage.clear()
    }

}
function loadStatsEnd(){
    topScore()
    numberNow.innerHTML = `The number was: ${numberGoal}`
    scoreEnd.innerHTML = `Score: ${scoreCalc()}`
    topScoreEnd.innerHTML = `Top score: ${localStorage.getItem("topScore")}`

    hideRemove()
}
function reset(){
    hideAdd()
    tries = chances
    numberGoal = Math.floor(Math.random() * maxNumber)+1
    triesHtml.innerHTML = `Tries: ${tries}`
    result.innerHTML = ""
}

function submitTry(x){
    if(tries <= 0){
        return
    }
    if(Number(x) === numberGoal){
        endGame(true)
        return
    }else if(x > numberGoal){
        result.innerHTML = `The number is lower than ${x}`
    }else if(x < numberGoal){
        result.innerHTML = `The number is higher than ${x}`
    }
    tries--
    triesHtml.innerHTML = `Tries: ${tries}`
    if(tries === 0){
        endGame(false)
    }
    inputNumber.value = ""
    inputNumber.focus()

}

function scoreCalc(){
    return Math.round((tries / chances) * 100);
}

function topScore(){
    if(scoreCalc() > topScoreNumber) {
        localStorage.setItem("topScore", scoreCalc())
    }
}
hideAdd()

// eventos

submitButton.addEventListener("click", () => {
    if(inputNumber.value !== "" && inputNumber.value >= 1 && inputNumber.value <= maxNumber) {
        submitTry(inputNumber.value)
    }
})
inputNumber.addEventListener("keypress", (key) => {
    if(key.key === "Enter" && inputNumber.value !== "" && inputNumber.value >= 1 && inputNumber.value <= maxNumber && blackScreen.classList.contains("hidden")) {
        submitTry(inputNumber.value)
    }
})
playAgainButton.addEventListener("click", function() {
    if(localStorage.getItem("normal") === "true"){
        window.location.href = "normal.html"
    }else{
        reset()
    }
})
back.addEventListener("click", () => {
        window.location.href = "../Start.html";
})
if(localStorage.getItem("topScore") !== null){
    topScoreHtml.innerHTML = `Top score: ${localStorage.getItem("topScore")}`
}else{
    topScoreHtml.innerHTML = `Top score: 0`
}
