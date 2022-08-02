var scoreHistory = document.querySelector("#pastScores");


var userHistory = JSON.parse(localStorage.getItem("highScores"))
var ulEl = document.getElementById('pastScores');

for (var i=0; i<userHistory.length; i++ ){
    var liEl = document.createElement('li');
    liEl.textContent = userHistory[i].user+": "+ userHistory[i].score;
    ulEl.appendChild(liEl);

}