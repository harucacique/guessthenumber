// variaveis de modo

let maxNumber = 1000
let chances = 5
console.log(localStorage.getItem("normal"))
// main screen

const inputNumber = document.getElementById("number");
const submitButton = document.getElementById("submit");
const triesHtml = document.getElementById("tries");
const topScoreHtml = document.getElementById("topScore");


let tries = chances
let numberGoal = Math.floor(Math.random() * maxNumber)+1

const blackScreen = document.getElementById("blackScreen");
const playAgainButton = document.getElementById("playAgain");
const endMatch = document.getElementById("endMatch");
let winOrLose = document.getElementById("winOrLose");
let topScoreNumber = 0
let result = document.getElementById("result");
const hint = document.getElementById("hint")

const numberNow = document.getElementById("numberNow");
const scoreEnd = document.getElementById("scoreWin");
const topScoreEnd = document.getElementById("topScoreWin")

//functions
function hideAdd(){
    endMatch.classList.add("hidden");
    blackScreen.classList.add("hidden");
    hint.classList.add("hidden");
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
        playAgainButton.innerHTML = `Hard Mode`
        localStorage.setItem("hard", "true")
    }else{
        winOrLose.innerHTML = `Congratulations, you loose noob`
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
function submitTry(x){
    if(tries <= 0){
        return
    }
    if(Number(x) === numberGoal){
        endGame(true)
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
    if(tries === 1){
        loadHint()
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

function loadHint() {
    hint.classList.remove("hidden");
    for (let i = 2; i <= 9; i++) {
        if (numberGoal % i === 0) {
            hint.innerHTML = `Your number isn't prime`;
            hint.classList.remove("hidden");
        }
    }
    if (hint.innerHTML === "") {
        hint.innerHTML = `Your number is prime!`;
    }
    if (numberGoal % 2 === 0) {
            hint.innerHTML += `<br>Also, the number is even`;
    } else {
            hint.innerHTML += `<br>Also, the number is odd`;
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
    if(localStorage.getItem("hard") === "true"){
        window.location.href = "impossible.html"
    }else{
        window.location.href = "../Start.html"
    }
})
back.addEventListener("click", () => {
    window.location.href = "../Start.html";
})
topScoreHtml.innerHTML = `Top score: ${localStorage.getItem("topScore")}`