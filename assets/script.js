
var time = questions.length * 10;
var timer;

var qIndex = 0;
var score = 0;
var startButton = document.getElementById("start-btn");
var timeSpn = document.getElementById("time");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var initialForm = document.getElementById("initialForm");
var submitButton = document.getElementById("submit");
function startQuiz() {

    startButton.hidden = true;
    timer = setInterval(function () {
        time--;
        timeSpn.textContent = time;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
    currentQuestion()
};

startButton.onclick = startQuiz;
function endQuiz() {

    clearInterval(timer);
    alert("Time is up!");
    showScores();
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
        endQuiz();
    } else {

        var currentQuestion = questions[qIndex];
        var questionClick = event.target.textContent;
        if (questionClick.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            alert("you're correct!");

            score++;

        } else {
            alert("Incorrect");
            time -= 5;
        }


        qIndex++;
        showQuestion();
    }
}

function currentQuestion() {
    showQuestion();
    console.log(questions.length);
}

function showScores() {
    questionEl.textContent = "Finished!";
    choicesEl.textContent = "Total Points: " + score;
    initialForm.hidden = false;

}

function saveScore() {
    console.log("clicked submit")
}

submitButton.onclick = saveScore;