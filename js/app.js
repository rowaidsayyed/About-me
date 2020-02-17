'use strict';
alert('Please answer using yes/no or y/n ');

var age = prompt('Am I more than 22 years old ? ').toUpperCase();
while(age !== 'YES' && age !== 'Y' && age !== 'NO' && age !== 'N'){
  age = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
}

var degree = prompt('Do I have a degree ?').toUpperCase();
while(degree !== 'YES' && degree !== 'Y' && degree !== 'NO' && degree !== 'N'){
  degree = prompt('Do I have a degree ? (answer using yes/no or y/n )').toUpperCase();
}

var glasses = prompt('Do I wear glasses ? ').toUpperCase();
while(glasses !== 'YES' && glasses !== 'Y' && glasses !== 'NO' && glasses !== 'N'){
  glasses = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
}

var java = prompt('Do I know javascript before 2020 ? ').toUpperCase();
while(java !== 'YES' && java !== 'Y' && java !== 'NO' && java !== 'N'){
  java = prompt('Am I more than 22 years old ? (answer using yes/no or y/n )').toUpperCase();
}

var level = prompt('Am I in 301 level ? ').toUpperCase();
while(level !== 'YES' && level !== 'Y' && level !== 'NO' && level !== 'N'){
  level = prompt('Am I in 301 level ? (answer using yes/no or y/n )').toUpperCase();
}

if(age === 'YES' || age === 'Y'){
  //console.log('Am I more than 22 years old: Yes, and your answer ' + age + ' so you are correct');
  alert('Am I more than 22 years old: Yes, and your answer ' + age + ' so you are correct');
}else {
  //console.log('Am I more than 22 years old: Yes, and your answer ' + age + ' so you are wrong');
  alert('Am I more than 22 years old: Yes, and your answer ' + age + ' so you are wrong');
}

if(degree === 'YES' || degree === 'Y'){
  //console.log('Do I have a degre: Yes, and your answer ' + degree + ' so you are correct');
  alert('Do I have a degre: Yes, and your answer ' + degree + ' so you are correct');
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
}

if(java === 'YES' || java === 'Y'){
  //console.log('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are wrong');
  alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are wrong');
}else {
  //console.log('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are correct');
  alert('Do I know javascript before 2020: NO, and your answer ' + java + ' so you are correct');
}

if(level === 'YES' || level === 'Y'){
  //console.log('Am I in 301 level: NO, and your answer ' + level + ' so you are wrong');
  alert('Am I in 301 level: NO, and your answer ' + level + ' so you are wrong');
}else {
  //console.log('Am I in 301 level: NO, and your answer ' + level + ' so you are correct');
  alert('Am I in 301 level: NO, and your answer ' + level + ' so you are correct');
}

var userName = prompt('Whats yor name ? ','user');
alert(' Hello ' + userName + ' welcome to my website ');
var msg = document.getElementById('msg');
msg.append( 'Hello ' + userName + ' welcome to my website and I hope to know you more ' );
