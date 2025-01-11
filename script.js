const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let isAlive = true;

document.addEventListener("keydown", function () {
    if (isAlive && !dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
});

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cactusWidth = parseInt(window.getComputedStyle(cactus).getPropertyValue("width"));


    if (cactusLeft < 50 + cactusWidth && cactusLeft > 50 && dinoTop >= 140) {
        gameOver();
    }
}

function gameOver() {
    isAlive = false;
    alert("GAME OVER!!");
    cactus.style.animation = "none";

    setTimeout(() => {
        cactus.style.animation = "cactusMov 2s infinite linear";
        isAlive = true;
    }, 500);
}

setInterval(checkCollision, 10);
