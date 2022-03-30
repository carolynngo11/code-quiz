// timer function variables
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 101;

// quiz variables
var questionsEl = document.getElementById("question");
var titleEl = document.getElementById("title");
var optionAEl = document.getElementById("optionA");
var optionBEl = document.getElementById("optionB");
var optionCEl = document.getElementById("optionC");
var optionDEl = document.getElementById("optionD");
var questionIndex = 0;

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

function questionList() {
  var questionIndex = quizQuestions[currentQuestionIndex];
  question.innerText = Questions[id].q;

  optionAEl.innerText = questionIndex.optionA;
  optionBEl.innerText = questionIndex.optionB;
  optionCEl.innerText = questionIndex.optionC;
  optionDEl.innerText = questionIndex.optionD;
}

function gameoverMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "gameover.html");
}

setTime();