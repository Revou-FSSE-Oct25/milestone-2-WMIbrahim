let clicks = 0;
let timeLeft = 10;
let gameOver = false;
let timerStarted = false;
let timer = null;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const resultEl = document.getElementById("result");
const button = document.getElementById("clickBtn");

function calculateFinalScore(clicks, timeLeft) {
    if (timeLeft <= 0) {
        return `Game Over! Your final score is ${clicks}.`;
    } else {
        return `Keep clicking! Current score: ${clicks}`;
    }
}

// Handle button click
button.addEventListener("click", () => {
    if (gameOver) return;

    // first click
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }

    clicks++;
    scoreEl.textContent = clicks;
});

// Start countdown
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver = true;
            button.disabled = true;
            resultEl.textContent = calculateFinalScore(clicks, timeLeft);
        }
    }, 1000);
}
