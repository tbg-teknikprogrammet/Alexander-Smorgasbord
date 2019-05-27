const p1Span = document.getElementById("player1");
const p2Span = document.getElementById("player2");
const p1Button = document.getElementById("p1");
const p2Button = document.getElementById("p2");
const inputScore = document.getElementById("scoreKeeper");
const playToSpan = document.getElementById("scoreToWin");
const resetButton = document.getElementsByTagName("button")[2];
let gameOver = false;
let p1ScoreCount = 0;
let p2ScoreCount = 0;

p1Button.addEventListener("click", () => {
  p1ScoreCount++;
  p1Span.textContent = p1ScoreCount;
  if (p1ScoreCount == inputScore.value) {
    alert("Player 1 Är Vinnaren!");
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", () => {
  p2ScoreCount++;
  p2Span.textContent = p2ScoreCount;
  if (p2ScoreCount == inputScore.value) {
    alert("Player 2 Är Vinnaren!");
    
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

inputScore.addEventListener("click", () => {
  playToSpan.textContent = inputScore.value;
});

resetButton.addEventListener("click", function() {
  gameOver = false;
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1Span.innerHTML = 0;
  p2Span.innerHTML = 0;
  inputScore.value = 5;
  p1Button.disabled = false;
  p2Button.disabled = false;
});