var startGame = document.querySelector("#start");
var counterEl = document.querySelector("#counter");
var question = document.querySelector("#question")
var slidesEl = document.querySelector("#slides")
var highScore =document.querySelector("#high")
var counter;

var gameOver = document.createElement('h3');
var score = document.createElement('p');

var right = 0
var wrong = 0
var time = 75
var currentQuestionNum = 0

var library = [

    {
        question: "Commonly used data types DO not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JaveScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
]

function nextQuestion() {

    slidesEl.innerHTML = '';

    var currentQuestion = library[currentQuestionNum];

    var newQuestion = document.createElement('h2');
    newQuestion.textContent = currentQuestion.question;
    slidesEl.appendChild(newQuestion);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = currentQuestion.choices[i];
        ulEl.appendChild(liEl);
    }
    newQuestion.appendChild(ulEl);
}


startGame.addEventListener('click', function () {

    nextQuestion();

    counter = setInterval(function () {
        counterEl.textContent = time;
        time--;
        if (time <= 0) {
            
            clearInterval(counter);

            endGame();
        }
    }, 1000)
})


slidesEl.addEventListener('click', function (event) {
    if (event.target.matches('li')) {
        var currentQuestion = library[currentQuestionNum]
        var userGuess = event.target.textContent;
        if (userGuess === currentQuestion.correct) {
            right++
            alert("Correct!")
            //play sound
        } else {
            wrong++
            time = time - 10
            alert("Incorrect.")
            //play sound
        }

        currentQuestionNum++;
        if (currentQuestionNum == library.length) {
             endGame()
            
        } else {
           nextQuestion();
        }

    }
})

function endGame() {

    clearInterval(counter);
    localStorage.setItem('score', time)
    window.location.replace("endgame.html")


}

    



