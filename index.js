let randomNumber1=Math.floor(Math.random()*6)+1;
let randomDiceImage="dice"+randomNumber1+".png";
let randomImageSource="images/"+randomDiceImage;
let img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

let randomNumber2=Math.floor(Math.random() *6)+1;
let randomImageSource2="images/dice"+randomNumber2+".png";
let img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="palyer 1 is wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Drow!";
}