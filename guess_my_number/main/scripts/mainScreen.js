let difficultEasy = document.getElementById("easy");
let difficultNormal = document.getElementById("normal");
let difficultHard = document.getElementById("hard");
let difficultImpossible = document.getElementById("impossible");

function load(){
    if(localStorage.getItem("normal") !== 'true') {
        difficultNormal.classList.add("locked");
    }else{
        difficultNormal.classList.remove("locked");
    }
    if(localStorage.getItem("hard") !== 'true') {
        difficultHard.classList.add("locked");
    }else{
        difficultHard.classList.remove("locked");
    }
    if(localStorage.getItem("impossible") !== 'true') {
        difficultImpossible.classList.add("locked");
    }else{
        difficultImpossible.classList.remove("locked");
    }
    let locked = document.querySelectorAll(".locked");
    locked.forEach((element) => {
        element.innerHTML = "Locked"
    })
}
load()



window.addEventListener('load', () => {
    if (sessionStorage.getItem('reloadNext') === 'true') {
        sessionStorage.removeItem('reloadNext');
        window.location.reload();
    }
});











difficultEasy.addEventListener("click", () => {
    window.location.href = "easy.html";
})
difficultNormal.addEventListener("click", function() {
    if(localStorage.getItem('normal') === 'true') {
        window.location.href = "normal.html";
    }
})
difficultHard.addEventListener("click", function() {
    if(localStorage.getItem('hard') === 'true') {
        window.location.href = "hard.html";
    }
})
difficultImpossible.addEventListener("click", function() {
    if(localStorage.getItem('impossible') === 'true') {
        window.location.href = "impossible.html";
    }
})