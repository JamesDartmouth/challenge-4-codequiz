var nameInput = document.querySelector("#username");
var submitButton = document.querySelector("#submit");


var highScores=JSON.parse(localStorage.getItem("highScores")) || []

var time = localStorage.getItem("score")
var highScore =document.querySelector("#finalScore")
highScore.textContent= time

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    var name = nameInput.value;
    var data = {user: name, score: time}
    highScores.push(data)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    // localStorage.setItem('password', score)

    alert("Saved")

});




