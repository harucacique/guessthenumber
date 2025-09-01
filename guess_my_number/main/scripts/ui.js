import { endGame, topScore, submitTry, scoreCalc} from './utils.js';
export let elements = {}
export function loadElements(maxNumber, chances){
    elements = {
        back: document.querySelector('#back'),
        inputNumber: document.getElementById("number"),
        submitButton: document.getElementById("submit"),
        triesHtml: document.getElementById("tries"),
        topScoreHtml: document.getElementById("topScore"),
        tries: chances,
        numberGoal: Math.floor(Math.random() * maxNumber) + 1,
        blackScreen: document.getElementById("blackScreen"),
        playAgainButton: document.getElementById("playAgain"),
        endMatch: document.querySelector("#endMatch"),
        winOrLose: document.getElementById("winOrLose"),
        topScoreNumber: localStorage.getItem("topScore"),
        result: document.getElementById("result"),
        numberNow: document.getElementById("numberNow"),
        scoreEnd: document.getElementById("scoreWin"),
        topScoreEnd: document.getElementById("topScoreWin"),
        hint: document.getElementById("hint")
    }
}
export function hideAdd(gameDifficulty){
    elements.endMatch.classList.add("hidden");
    elements.blackScreen.classList.add("hidden");
    if(gameDifficulty !== "easy"){
        elements.hint.classList.add("hidden");
    }
}
export function hideRemove(){
    elements.endMatch.classList.remove("hidden");
    elements.blackScreen.classList.remove("hidden");
}
export function loadStatsEnd(chances){
    topScore(chances)
    elements.numberNow.innerHTML = `The number was: ${elements.numberGoal}`
    elements.scoreEnd.innerHTML = `Score: ${scoreCalc(chances)}`
    elements.topScoreEnd.innerHTML = `Top score: ${localStorage.getItem("topScore")}`
    hideRemove()
}