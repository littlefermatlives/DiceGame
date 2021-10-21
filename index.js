var randomNumber = Math.floor(Math.random() * 6) + 1; 

var randImgSrc = "images/dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randImgSrc2);


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}