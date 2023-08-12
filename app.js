let timer = 60;
let score = 0;
let hitRn = 0;

function makeBubble() {
    let bubble = "";
    for (let i = 0; i < 200; i++) {
        let rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;
}

function runTimer() {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            let totalScore = document.querySelector("#scoreVal").textContent;
            document.querySelector("#pbtm").innerHTML = `<div class= "gameOverContainer"><h1 id = "gameOver" >Game Over</h1> <h2 class = "score">You Scored: ${totalScore} pts</h2><br><i>NOTE: Refresh To play again</i></div> `;
        }
    }, 1000)
}

function increaseScore() {
    document.querySelector("#scoreVal").textContent = score;
    score += 10;
}

function startGame() {
    document.querySelector("#pbtm").addEventListener("click", function (details) {
        let clickedNumber = Number(details.target.textContent);
        // alert(clickedNumber);
        if (clickedNumber == hitRn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });
}


makeBubble();
getNewHit();
runTimer();
startGame();
increaseScore();