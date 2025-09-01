// variables
const archiveName = window.location.pathname; // Retorna: "/paginas/contato.html"
const archivePath = archiveName.split('/');
const fullArchiveName = archivePath.pop(); // Retorna: "contato.html"
const finalArchiveName = fullArchiveName.replace('.html', '')
let gameDifficulty = finalArchiveName
let maxNumber = loadGameDifficulty(gameDifficulty).maxNumber
let chances = loadGameDifficulty(gameDifficulty).chances
// imports
import { topScore, submitTry} from './utils.js';
import {elements, hideAdd, loadElements} from './ui.js';
import { loadGameDifficulty} from "./gameVariables.js";
// load UI
loadElements(maxNumber, chances)
hideAdd(gameDifficulty)
if(localStorage.getItem("topScore") !== null){
    elements.topScoreHtml.innerHTML = `Top score: ${localStorage.getItem("topScore")}`
}
// events
elements.submitButton.addEventListener("click", () => {
    if(elements.inputNumber.value !== "" && elements.inputNumber.value >= 1 && elements.inputNumber.value <= maxNumber && elements.blackScreen.classList.contains("hidden")) {
        submitTry(elements.inputNumber.value, gameDifficulty, chances)
    }
})
elements.inputNumber.addEventListener("keypress", (key) => {
    if(key.key === "Enter" && elements.inputNumber.value !== "" && elements.inputNumber.value >= 1 && elements.inputNumber.value <= maxNumber && elements.blackScreen.classList.contains("hidden")) {
        submitTry(elements.inputNumber.value, gameDifficulty, chances)
    }
})
elements.playAgainButton.addEventListener("click", function() {
    if(elements.playAgainButton.innerHTML === "Play Again"){
        window.location.href = "start.html"
    }
    switch(elements.playAgainButton.innerHTML) {
        case "Go to Normal Mode":
            window.location.href = "normal.html"
            break;
        case "Go to Hard Mode":
            window.location.href = "hard.html"
            break;
        case "Go to Impossible Mode":
            window.location.href = "impossible.html"
            break;
        case "Continue":
            window.location.href = "https://www.youtube.com/watch?v=8ScAnaU0FFE&pp=ygUOdmlkZW8gY2F0IGtpc3M%3D"
            break;
    }
})
elements.back.addEventListener("click", () => {
    window.location.href = "start.html";
})
