var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./assets/images/dice" + randomNumber1 + ".png";
document.querySelector(".img-1").setAttribute("src", randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2= "./assets/images/dice" + randomNumber2+ ".png";
document.querySelector(".img-2").setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector('.title').innerHTML = "Player 1 Wins."
} else if ( randomNumber1 < randomNumber2) {
    document.querySelector(".title").innerHTML = "Player 2 Wins";
} else {
    document.querySelector(".title").innerHTML = "Draw";
}