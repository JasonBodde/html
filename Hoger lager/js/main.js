console.log('main load');
//score/credits
let creditsPlayer = 3;
console.log(creditsPlayer);
// aanroepen knoppen en math.random 
let X = Math.floor(Math.random() * 12) + 1;
let Y = Math.floor(Math.random() * 12) + 1;
const Go = document.querySelector('.go-button');
const buttonGooi = document.querySelector('.dice-button');
const buttonHoger = document.querySelector('.higher-button');
const buttonLager = document.querySelector('.lower-button');
const messageBox = document.querySelector ('.message-box');
const messageBelow = document.querySelector('.message-box-below');
//credits oproepen
const creditsPlay = document.querySelector('.player-credits');

//start knop
Go.addEventListener('click' ,function(){
    messageBox.innerHTML = 'klik op gooi dobbelsteen om  het spel te starten';
});
//Button voor dobbelstenen te gooien
buttonGooi.addEventListener('click' ,function() {
     X = Math.floor(Math.random() * 12) + 1;
     console.log('gooi', X)
    messageBox.textContent ='Het gegooide aantal is ' + X;
});
//button hoger
buttonHoger.addEventListener('click' ,function(){
    let Y = Math.floor(Math.random() * 12) + 1;
    console.log('Hoger', Y)
    messageBelow.textContent= 'Je hebt ' + Y + ' gegooid';
if(Y > X) {
    messageBelow.textContent = 'Je hebt het goed het getal was ' + Y;
    //creditsPlay.textContent = creditsPlay++;
    creditsPlay.textContent = creditsPlayer++;
}else if(Y < X){
    messageBelow.textContent = 'Je hebt verloren het getal was ' + Y;
    creditsPlay.textContent = creditsPlayer--;
    //creditsPlay.textContent = creditsPlay--;
}
});
//button lager
buttonLager.addEventListener('click' ,function() {
    let Y = Math.floor(Math.random() * 12) + 1;
    console.log('Lager', Y)
    messageBelow.textContent= 'Je hebt ' + Y + ' gegooid';
    if(Y < X){
        messageBelow.textContent = 'Je hebt het goed het getal was ' + Y;
        //creditsPlay.textContent = creditsPlay++;
        creditsPlay.textContent = creditsPlayer++;
    }else if (Y > X) {
        messageBelow.textContent = 'Je hebt verloren het getal was ' + Y;
        //creditsPlay.textContent = creditsPlay--;
        creditsPlay.textContent = creditsPlayer--;
    }
});

