'use strict';
var score = 0 ;

var userName = prompt('Whats yor name ? ','user');
alert(' Hello ' + userName + ' welcome to my website ');
var msg = document.getElementById('msg');
msg.append( 'Hello ' + userName + ' welcome to my website and I hope to know you more ' );


alert('Please answer using yes/no or y/n ');
function movies(){
  var movie = prompt('Do i like movies ? ').toUpperCase();
  while(movie !== 'YES' && movie !== 'Y' && movie !== 'NO' && movie !== 'N'){
    movie = prompt('Do i like movies ? (answer using yes/no or y/n )').toUpperCase();
  }if(movie === 'YES' || movie === 'Y'){
    alert('Do i like movies : Yes, and your answer ' + movie + ' so you are correct');
    score = score+1;
  }else {
    alert('Do i like movies : Yes, and your answer ' + movie + ' so you are wrong');
  }
}

function degrees(){
  var degree = prompt('Do I have a degree ?').toUpperCase();
  while(degree !== 'YES' && degree !== 'Y' && degree !== 'NO' && degree !== 'N'){
    degree = prompt('Do I have a degree ? (answer using yes/no or y/n )').toUpperCase();

  }if(degree === 'YES' || degree === 'Y'){
    alert('Do I have a degre: Yes, and your answer ' + degree + ' so you are correct');
    score++;
  }else {
    alert('Do I have a degre: Yes, and your answer ' + degree + ' so you are wrong');
  }}


function eyes(){
  var glasses = prompt('Do I wear glasses ? ').toUpperCase();
  while(glasses !== 'YES' && glasses !== 'Y' && glasses !== 'NO' && glasses !== 'N'){
    glasses = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
  }
  if(glasses === 'YES' || glasses === 'Y'){
    alert('Do I wear glasses: NO, and your answer ' + glasses + ' so you are wrong');
  }else {
    alert('Do I wear glasses: NO, and your answer ' + glasses + ' so you are correct');
    score++;
  }
}


function programming(){
  var java = prompt('Do I know javascript before 2020 ? ').toUpperCase();
  while(java !== 'YES' && java !== 'Y' && java !== 'NO' && java !== 'N'){
    java = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
  }
  if(java === 'YES' || java === 'Y'){
    alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are wrong');
  }else {
    alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are correct');
    score++;
  }
}



function three(){
  var level = prompt('Am I in 301 level ? ').toUpperCase();
  while(level !== 'YES' && level !== 'Y' && level !== 'NO' && level !== 'N'){
    level = prompt('Am I in 301 level ? (answer using yes/no or y/n )').toUpperCase();
  }
  if(level === 'YES' || level === 'Y'){
    alert('Am I in 301 level: NO, and your answer ' + level + ' so you are wrong');
  }else {
    alert('Am I in 301 level: NO, and your answer ' + level + ' so you are correct');
    score++;
  }

}


// check number : 6th question
function ageGuessing(){
  var trials = 0;
  var guessAge = 0;
  while(trials< 5 ){
    if(trials === 4){
      alert('Sorry you lose, my age is 24 ');
      break;
    }
    guessAge = parseInt(prompt('what do you expect my age? '));
    if(guessAge>=30){
      alert('too high, try again');
      trials++;
    }
    if(guessAge > 25 && guessAge<30){
      alert('your guessing is high, try again');
      trials++;
    }
    if(guessAge<=15){
      alert('your guessing is too low, try again');
      trials++;
    }
    if(guessAge<=24 && guessAge>15){
      alert('your guessing is low, try again');
      trials++;
    }
    if(guessAge === 25){
      alert('your guessing is correct');
      score++;
      break;
    }
  }}

// Check for array : 7th question
function carGuessing(){
  var cars = ['BMW','MERCEDES','MAZDA','TESLA'];
  var guessCar =prompt('Can you guess one of my favourits cars').toUpperCase();
  var trueCar = 0;
  for(var carrTrials = 0 ;carrTrials !== 5 ;carrTrials++ ){
    for(var k = 0; k <4 /*cars.length=4*/ ; k++ ){
      if(guessCar === cars[k]){
        trueCar = 1;
      }}
    if(trueCar === 1){
      score++;
      alert('Hello ' + userName + ' my favourite cars ',cars ,' and your final score = ',score);
      var mycars = document.getElementById('mycars');
      mycars.append( 'Hello ' + userName + ' my favourite cars ',cars ,' and your final score = ',score);
      var scoreblock = document.getElementById('scorepre');
      scoreblock.append(score);
      break;
    }
    guessCar = prompt('Sorry you are wrong, Can you guess again?').toUpperCase();

  }}

movies();
degrees();
eyes();
programming();
three();
ageGuessing();
carGuessing();
