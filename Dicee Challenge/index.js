var randomnumber1=1+Math.floor(6*Math.random());
console.log(randomnumber1);

var randomDiceImage="images/dice"+randomnumber1+".png";

document.querySelector(".img1").src=randomDiceImage

var randomnumber2=1+Math.floor(6*Math.random());
console.log(randomnumber2);

var randomDiceImage="images/dice"+randomnumber2+".png";

document.querySelector(".img2").src=randomDiceImage


if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else document.querySelector("h1").innerHTML="Draw!";
