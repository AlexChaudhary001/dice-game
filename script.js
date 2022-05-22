var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

//if player1 wins//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
// if player2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
// if no one wins
else {
  document.querySelector("h1").innerHTML = "Draw";
}
