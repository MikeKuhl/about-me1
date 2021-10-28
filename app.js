'use strict';

// let userKnow = prompt('Do you know Michael Metcalf?','Yes or No');

// let know = userKnow.toLowerCase();

// if (know === 'y'){
//   let known = 'yes';
// }

// if (known === 'yes'){
//   alert('well its nice to know you.');
// }

let userName = prompt('Whats your name?');
function user(userName) {
  console.log('Users name is ' + userName);
  if(userName === 'Michael'){
    document.write('Doppelganger');
  }else{
    document.write(userName);
  }
}

user(userName);
let userScore = 0;

function gameTime(){
  let arrayOfQuestions = [question1(), question2(), question3(), question4(), question5(), question6(), question7()
  ];
  console.log('User got ' + userScore + ' correct');
  alert('You scored ' + userScore + ' of 7 possible points');
}

function question1() {
  let userGuess1 = prompt('Am I from Seattle?','Yes or No');
  userGuess1.toLowerCase();
  console.log('Guess for question 1 is ' + userGuess1);
  if (userGuess1 === 'no' || 'n'){
    alert('Correct I am from Port Orchard Washington');
    userScore++;
  } else if (userGuess1 === 'yes' || 'y'){
    alert('Nope, I am from Port Orchard Washington');
  }
}

function question2() {
  let userGuess2 = prompt('Am I younger than 40 years old?','Yes or No');
  userGuess2.toLowerCase();
  console.log('Guess for question 2 is ' + userGuess2);
  if (userGuess2 === 'no' || 'n'){
    alert('Do I really look that old? I am 39!');
    userScore++;
  } else if (userGuess2 === 'yes' || 'y'){
    alert('Correct I am 39 years old');
  }
}

function question3() {
  let userGuess3 = prompt('Am I younger than 40 years old?','Yes or No');
  userGuess3.toLowerCase();
  console.log('Guess for question 3 is ' + userGuess3);
  if (userGuess3 === 'no' || 'n'){
    alert('Do I really look that old? I am 39!');
    userScore++;
  } else if (userGuess3 === 'yes' || 'y'){
    alert('Correct I am 39 years old');
  }
}

function question4() {
  let userGuess4 = prompt('Am I younger than 40 years old?','Yes or No');
  userGuess4.toLowerCase();
  console.log('Guess for question 4 is ' + userGuess4);
  if (userGuess4 === 'no' || 'n'){
    alert('Do I really look that old? I am 39!');
    userScore++;
  } else if (userGuess4 === 'yes' || 'y'){
    alert('Correct I am 39 years old');
  }
}

function question5() {
  let userGuess5 = prompt('Am I younger than 40 years old?','Yes or No');
  userGuess5.toLowerCase();
  console.log('Guess for question 5 is ' + userGuess5);
  if (userGuess5 === 'no' || 'n'){
    alert('Do I really look that old? I am 39!');
    userScore++;
  } else if (userGuess5 === 'yes' || 'y'){
    alert('Correct I am 39 years old');
  }
}

function question6() {
  let userGuess6 = prompt('Guess a number between 1 and 50','1 - 50');
  let attempts6 = 4;
  let correctNum = (Math.floor(Math.random() * 50) + 1);
  parseInt(userGuess6);
  for(let a = 0; a < attempts6; a++)
    console.log('Guess for question 6 is ' + userGuess6);
  while(userGuess6 < 1 || userGuess6 < 50){
    userGuess6 = prompt('Are numbers too hard for you? Try again. Guess a number between 1 and 50','1 - 50');
    parseInt(userGuess6);
  }
  if (userGuess6 === correctNum){
    alert('Wow! You actual picked the right number.');
    userScore++;
  } else if (userGuess6 < correctNum){
    userGuess6 = prompt('Too low. Try again.','1 - 50');
    parseInt(userGuess6);
  } else if (userGuess6 > correctNum){
    userGuess6 = prompt('Too high. Try again.','1 - 50');
    parseInt(userGuess6);
  } else{
    alert('Didnt quite get the right number. The number was ' + correctNum);
  }
}

function question7() {
  let userGuess7 = prompt('What famous English city did I live by?','choose wisely');
  userGuess7.toLowerCase();
  let attempts7 = 6;
  let cities = ['London', 'Bath', 'York', 'Oxford', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol', 'Brighton'];
  for(let b = 0; b < attempts7; b++)
    console.log('Guess for question 7 is ' + userGuess7);
  if (userGuess7 === 'cambridge'){
    alert('Nice job!');
    userScore++;
  } else if (userGuess7 !== cities.toLowerCase()){
    userGuess7 = prompt('Is that even in England? Try again.');
    userGuess7.toLowerCase();
  } else if (userGuess7 === cities.toLowerCase()){
    userGuess7 = prompt('Close but not quite it. Try again.');
    userGuess7.toLowerCase();
  } else{
    alert('So close but I lived by Cambridge. The other cities in England you could have choosen were London, Bath, York, Oxford, Manchester, Birmingham, Liverpool, Bristol, Brighton');
  }
}







// for (let g = 1; g <= 4; g++)
//   console.log('Guess number ' + g);

// can I make this into booleen
// let userKnow = prompt('Do you know Michael Metcalf?','Yes or No');
// switch (userKnow.toLowerCase()) {
// case 'y':
// //   console.log('this user knows me');
//   alert('Well its nice to know you.');
//   break;
// case 'yes':
// //   console.log('this user knows me');
//   alert('Well its nice to know you.');
//   break;
// default:
//   console.log('this user doesnt know me');
// }

// let userLoc = prompt('Are you in the Seattle area?','Yes or No');
// switch (userLoc.toLowerCase()) {
// case 'y':
// //   console.log('this user is in Seattle');
//   alert('Maybe we will run into eachother sometime.');
//   break;
// case 'yes':
// //   console.log('this user is in Seattle');
//   alert('Maybe we will run into eachother sometime.');
//   break;
// default:
//   console.log('this user is not near me');
// }

// let userHS = prompt('Did you go to South Kitsap High School?','Yes or No');
// switch (userHS.toLowerCase()) {
// case 'y':
// //   console.log('this user went to SKHS');
//   alert('Maybe we had a class together or just passed eachother in the halls.');
//   break;
// case 'yes':
// //   console.log('this user went to SKHS');
//   alert('Maybe we had a class together or just passed eachother in the halls.');
//   break;
// default:
//   console.log('this user did not go to SKHS');
// }

// let userMil = prompt('Have you been in the military?','Yes or No');
// switch (userMil.toLowerCase()) {
// case 'y':
// //   console.log('this user was in the military');
//   alert('Maybe we ran into eachother at some point.');
//   break;
// case 'yes':
// //   console.log('this user was in the military');
//   alert('Maybe we ran into eachother at some point.');
//   break;
// default:
//   console.log('this user was not in the military');
// }

// let userCF = prompt('Have you been in a Code Fellows course?','Yes or No');
// switch (userCF.toLowerCase()) {
// case 'y':
// //   console.log('this user went to Code Fellows');
//   alert('Fellow Dev, Noice!');
//   break;
// case 'yes':
// //   console.log('this user went to Code Fellows');
//   alert('Fellow Dev, Noice!');
//   break;
// default:
//   console.log('this user was not in Code Fellows');
// }
