import { elements, hideAdd, hideRemove, loadStatsEnd} from './ui.js';
import { loadHint, loadGameDifficulty} from "./gameVariables.js";
export function endGame(endGameResult, gameDifficulty, chances){
    loadStatsEnd(chances)
    if(endGameResult){
        elements.winOrLose.innerHTML = `Congratulations, you win!`
        elements.result.innerHTML = `You Win!`
        switch(gameDifficulty){
            case "easy":
                elements.playAgainButton.innerHTML = "Go to Normal Mode"
                break;
            case "normal":
                elements.playAgainButton.innerHTML = "Go to Hard Mode"
                break;
            case "hard":
                elements.playAgainButton.innerHTML = "Go to Impossible Mode"
                break;
            case "impossible":
                elements.playAgainButton.innerHTML = "Continue"
                break;
        }
        switch(gameDifficulty){
            case "easy":
                localStorage.setItem("normal", "true")
                break;
            case "normal":
                localStorage.setItem("hard", "true")
                break;
            case "hard":
                localStorage.setItem("impossible", "true")
                break;
            case "impossible":
                localStorage.setItem("impossible1", "true")
                break;
        }
    }else{
        elements.winOrLose.innerHTML = `Congratulations, you lose noob`
        elements.result.innerHTML = `you lose`
        elements.playAgainButton.innerHTML = `Play Again`
        localStorage.clear()
    }
}
export function submitTry(x, gameDifficulty, chances){
    elements.inputNumber.value = ""
    elements.inputNumber.focus()
    if(elements.tries <= 0){
        return
    }
    if(Number(x) === elements.numberGoal){
        endGame(true, gameDifficulty, chances)
        return
    }else if(x > elements.numberGoal){
        elements.result.innerHTML = `The number is lower than ${x}`
    }else if(x < elements.numberGoal){
        elements.result.innerHTML = `The number is higher than ${x}`
    }
    elements.tries--
    elements.triesHtml.innerHTML = `Tries: ${elements.tries}`
    if(elements.tries === 0){
        endGame(false, gameDifficulty, chances)
    }
    if(elements.tries === 3){
        loadHint(gameDifficulty)
    }
}
export function scoreCalc(chances){
    return Math.round((elements.tries / chances) * 100);
}

export function topScore(chances){
    if(scoreCalc(chances) > elements.topScoreNumber) {
        localStorage.setItem("topScore", `${scoreCalc(chances)}`)
    }
}
