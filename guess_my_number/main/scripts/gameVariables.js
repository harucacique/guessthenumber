import { elements, hideAdd, hideRemove, loadStatsEnd} from './ui.js';
export function loadGameDifficulty(gameDifficulty){
    let maxNumber = 0
    let chances = 0
    switch(gameDifficulty){
        case "easy":
            maxNumber = 20
            chances = 5
            break
        case "normal":
            maxNumber = 50
            chances = 7
            break
        case "hard":
            maxNumber = 100
            chances = 7
            break
        case "impossible":
            maxNumber = 1000
            chances = 8
            break
    }
    return {maxNumber, chances}
}
export function loadHint(gameDifficulty){
    switch(gameDifficulty){
        case "normal":
            if(elements.numberGoal % 2 === 0){
                elements.hint.innerHTML = "Hint: The number is even"
            }else{
                elements.hint.innerHTML = "Hint: The number is odd"
            }
            elements.hint.classList.remove("hidden");
            return
        case "hard":
            for(let i = 2; i <= 9; i++){
                if(elements.numberGoal % i === 0) {
                    elements.hint.innerHTML += `Your number isn't prime`;
                    elements.hint.classList.remove("hidden");
                    return
                }
            }
            break
        case "impossible":
            for (let i = 2; i <= 9; i++) {
                if (elements.numberGoal % i === 0) {
                    elements.hint.innerHTML = `Your number isn't prime`;
                    elements.hint.classList.remove("hidden");
                }
            }
            if (elements.hint.innerHTML === "") {
                elements.hint.innerHTML = `Your number is prime!`;
            }
            if (elements.numberGoal % 2 === 0) {
                elements.hint.innerHTML += `<br>Also, the number is even`;
            } else {
                elements.hint.innerHTML += `<br>Also, the number is odd`;
            }
            elements.hint.classList.remove("hidden");
            return
        default:
            return
    }
}