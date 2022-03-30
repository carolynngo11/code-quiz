var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 91;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameoverMessage();
      window.location.href = 'gameover.html';
    }

  }, 1000);
}

function gameoverMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "gameover.html");
}

setTime();