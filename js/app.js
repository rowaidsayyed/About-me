'use strict';
var score = 0 ;
var all = []; //Stretch Goal
alert('Please answer using yes/no or y/n ');

var movie = prompt('Do i like movies ? ').toUpperCase();
while(movie !== 'YES' && movie !== 'Y' && movie !== 'NO' && movie !== 'N'){
  movie = prompt('Do i like movies ? (answer using yes/no or y/n )').toUpperCase();
}
all.push(movie); //Stretch Goal

var degree = prompt('Do I have a degree ?').toUpperCase();
while(degree !== 'YES' && degree !== 'Y' && degree !== 'NO' && degree !== 'N'){
  degree = prompt('Do I have a degree ? (answer using yes/no or y/n )').toUpperCase();
}
all.push(degree); //Stretch Goal

var glasses = prompt('Do I wear glasses ? ').toUpperCase();
while(glasses !== 'YES' && glasses !== 'Y' && glasses !== 'NO' && glasses !== 'N'){
  glasses = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
}
all.push(glasses); //Stretch Goal

var java = prompt('Do I know javascript before 2020 ? ').toUpperCase();
while(java !== 'YES' && java !== 'Y' && java !== 'NO' && java !== 'N'){
  java = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
}
all.push(java); //Stretch Goal

var level = prompt('Am I in 301 level ? ').toUpperCase();
while(level !== 'YES' && level !== 'Y' && level !== 'NO' && level !== 'N'){
  level = prompt('Am I in 301 level ? (answer using yes/no or y/n )').toUpperCase();
}
all.push(level); //Stretch Goal

if(movie === 'YES' || movie === 'Y'){
  //console.log('Am I more than 22 years old: Yes, and your answer ' + movie + ' so you are correct');
  alert('Do i like movies : Yes, and your answer ' + movie + ' so you are correct');
  score = score+1;
  //console.log('score = ',score);
}else {
  //console.log('Am I more than 22 years old: Yes, and your answer ' + movie + ' so you are wrong');
  alert('Do i like movies : Yes, and your answer ' + movie + ' so you are wrong');
}

if(degree === 'YES' || degree === 'Y'){
  //console.log('Do I have a degre: Yes, and your answer ' + degree + ' so you are correct');
  alert('Do I have a degre: Yes, and your answer ' + degree + ' so you are correct');
  score++;
  //console.log('score = ',score);
}else {
  //console.log('Do I have a degre: Yes, and your answer ' + degree + ' so you are wrong');
  alert('Do I have a degre: Yes, and your answer ' + degree + ' so you are wrong');
}

if(glasses === 'YES' || glasses === 'Y'){
  //console.log('Do I wear glasses: NO, and your answer ' + glasses + ' so you are wrong');
  alert('Do I wear glasses: NO, and your answer ' + glasses + ' so you are wrong');
}else {
  //console.log('Do I wear glasses: NO, and your answer ' + glasses + ' so you are correct');
  alert('Do I wear glasses: NO, and your answer ' + glasses + ' so you are correct');
  score++;
  //console.log('score = ',score);
}

if(java === 'YES' || java === 'Y'){
  //console.log('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are wrong');
  alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are wrong');
}else {
  //console.log('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are correct');
  alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are correct');
  score++;
  //console.log('score = ',score);
}

if(level === 'YES' || level === 'Y'){
  //console.log('Am I in 301 level: NO, and your answer ' + level + ' so you are wrong');
  alert('Am I in 301 level: NO, and your answer ' + level + ' so you are wrong');
}else {
  //console.log('Am I in 301 level: NO, and your answer ' + level + ' so you are correct');
  alert('Am I in 301 level: NO, and your answer ' + level + ' so you are correct');
  score++;
  //console.log('score = ',score);
}

var userName = prompt('Whats yor name ? ','user');
alert(' Hello ' + userName + ' welcome to my website ');
var msg = document.getElementById('msg');
msg.append( 'Hello ' + userName + ' welcome to my website and I hope to know you more ' );



// check number : 6th question
var trials = 0;
var guessAge = 0;
while(trials< 5 ){
  if(trials === 4){
    alert('Sorry you lose, my age is 24 ');
    //console.log('Sorry you lose, my age is 24 ');
    break;
  }
  guessAge = parseInt(prompt('what do you expect my age? '));
  if(guessAge>=30){
    alert('too high, try again');
    trials++;
    //console.log('too high, try again',' trials = ', trials);
  }
  if(guessAge >= 24 && guessAge<30){
    alert('your guessing is high, try again');
    trials++;
    //console.log('your guessing is high, try again',' trials = ', trials);
  }
  if(guessAge<=15){
    alert('your guessing is too low, try again');
    trials++;
    //console.log('your guessing is too low, try again',' trials = ', trials);
  }
  if(guessAge<=23 && guessAge>15){
    alert('your guessing is low, try again');
    trials++;
    //console.log('your guessing is low, try again',' trials = ', trials);
  }
  if(guessAge === 24){
    alert('your guessing is correct');
    score++;
    //console.log('your guessing is correct',' trials = ', trials , ' score = ',score);
    break;
  }
}
// Check for array : 7th question
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
    //console.log('score = ',score,' trials =',carrTrials);
    break;
  }
  guessCar = prompt('Sorry you are wrong, Can you guess again?').toUpperCase();
  //console.log('score = ',score,' trials =',carrTrials);
}
//console.log('score = ',score, ' my favourite cars ',cars);

var mycars = document.getElementById('mycars');
mycars.append( 'Hello ' + userName + ' my favourite cars ',cars ,' and your final score = ',score);

//console.log(all); // Stretch Goal
