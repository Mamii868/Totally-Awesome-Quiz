
var time = questions.length * 10;
var timer;

var qIndex = 0;

var startButton = document.getElementById("start-btn");
var timeSpn = document.getElementById("time");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
function startQuiz() {
    timer = setInterval(function () {
        time--;
        if (time === 0) {
            endQuiz();
        }
    }, 1000);
    currentQuestion()
};

startButton.onclick = startQuiz;
function endQuiz() {
    clearInterval(timer);

}

function showQuestion() {
    var currentQuestion = questions[qIndex];

    questionEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = ""
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var newButton = document.createElement("button");
        newButton.textContent = choice;
        choicesEl.appendChild(newButton);
        newButton.onclick = questionClick;

    }
};

function questionClick(event) {
    if (qIndex >= questions.length) {
        //do something good
    } else {
        //do something bad

        var currentQuestion = questions[qIndex];
        var questionClick = event.target.textContent;
        if (questionClick.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            console.log("yo're correct!");

        } else {
            console.log("Incorrect");
            time -= 5;
        }
        qIndex++;
        showQuestion();
    }
}