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
  let arrayOfQuestions = [question1(), question2(), question3(), question4(), question5(), question6(), question7()];
  console.log('User got ' + userScore + ' correct');
  alert('You scored ' + userScore + ' of 7 possible points');
}

function question1() {
  let userGuess1 = prompt('Am I from Seattle?','Yes or No');
  userGuess1 = userGuess1.toLowerCase();
  console.log('Guess for question 1 is ' + userGuess1);
  if (userGuess1 === 'no' || userGuess1 === 'n'){
    alert('Correct I am from Port Orchard Washington');
    userScore++;
    console.log('Current score is ' + userScore);
  } else if (userGuess1 === 'yes' || userGuess1 === 'y'){
    alert('Nope, I am from Port Orchard Washington');
  }
}

function question2() {
  let userGuess2 = prompt('Am I younger than 40 years old?','Yes or No');
  userGuess2 = userGuess2.toLowerCase();
  console.log('Guess for question 2 is ' + userGuess2);
  if (userGuess2 === 'no' || userGuess2 === 'n'){
    alert('Do I really look that old? I am 39!');
  } else if (userGuess2 === 'yes' || userGuess2 === 'y'){
    alert('Correct I am 39 years old');
    userScore++;
    console.log('Current score is ' + userScore);
  }
}

function question3() {
  let userGuess3 = prompt('Was I in the Air Force?','Yes or No');
  userGuess3 = userGuess3.toLowerCase();
  console.log('Guess for question 3 is ' + userGuess3);
  if (userGuess3 === 'no' || userGuess3 === 'n'){
    alert('Correct, I was in the Army');
    userScore++;
    console.log('Current score is ' + userScore);
  } else if (userGuess3 === 'yes' || userGuess3 === 'y'){
    alert('Really? Do I look like I was part of the Chair Force?');
  }
}

function question4() {
  let userGuess4 = prompt('Have I been to the White House?','Yes or No');
  userGuess4 = userGuess4.toLowerCase();
  console.log('Guess for question 4 is ' + userGuess4);
  if (userGuess4 === 'no' || userGuess4 === 'n'){
    alert('Wrong. I have been in the White House on a private tour.');
  } else if (userGuess4 === 'yes' || userGuess4 === 'y'){
    alert('Correct I took a private tour in the White House.');
    userScore++;
    console.log('Current score is ' + userScore);
  }
}

function question5() {
  let userGuess5 = prompt('Have I driven over 150 MPH?','Yes or No');
  userGuess5 = userGuess5.toLowerCase();
  console.log('Guess for question 5 is ' + userGuess5);
  if (userGuess5 === 'no' || userGuess5 === 'n'){
    alert('Correct, I made it to 149 MPH when my 350Z peaked.');
    userScore++;
    console.log('Current score is ' + userScore);
  } else if (userGuess5 === 'yes' || userGuess5 === 'y'){
    alert('Not quite, I made it to 149 MPH when my 350Z peaked.');
  }
}

function question6() {
  let userGuess6 = prompt('Guess a number between 1 and 50','1 - 50');
  let correctNum = (Math.floor(Math.random() * 50) + 1);
  console.log('Correct number is ' + correctNum);
  userGuess6 = parseInt(userGuess6);
  for(let a = 1; a < 4; a++){
    console.log('Guess for question 6 is ' + userGuess6);
    while(userGuess6 < 1 || userGuess6 > 50){
      userGuess6 = prompt('Are numbers too hard for you? Try again. Guess a number between 1 and 50','1 - 50');
      userGuess6 = parseInt(userGuess6);
      console.log('Guess for question 6 is ' + userGuess6);
    } if (userGuess6 === correctNum){
      alert('Wow! You actual picked the right number.');
      userScore++;
      break;
    } else if (userGuess6 < correctNum){
      userGuess6 = prompt('Too low. Try again.','1 - 50');
      userGuess6 = parseInt(userGuess6);
      console.log('Guess for question 6 is ' + userGuess6);
    } else if (userGuess6 > correctNum){
      userGuess6 = prompt('Too high. Try again.','1 - 50');
      userGuess6 = parseInt(userGuess6);
      console.log('Guess for question 6 is ' + userGuess6);
    } else{
      alert('Didnt quite get the right number. The number was ' + correctNum);
    }
  }
}

function question7() {
  let userGuess7 = prompt('What famous English city did I live by?','choose wisely');
  userGuess7 = userGuess7.toLowerCase();
  let cities = ['london', 'bath', 'york', 'oxford', 'manchester', 'birmingham', 'liverpool', 'bristol', 'brighton'];
  let lived = 'cambridge';
  for(let b = 0; b <= 4; b++){
    console.log('Guess for question 7 is ' + userGuess7);
    if (userGuess7 === lived){
      alert('Nice job! I lived right outside Cambridge in the town of St Ives.');
      userScore++;
      break;
    } else if (cities.includes(userGuess7) && b !== 4){
      // console.log(array1.includes(2));
      userGuess7 = prompt('Close but not quite it. Try again.');
      userGuess7 = userGuess7.toLowerCase();
      console.log('Guess for question 7 is ' + userGuess7);
    } else if(!cities.includes(userGuess7) && b !== 4){
      userGuess7 = prompt('Is that even in England? Try again.');
      userGuess7 = userGuess7.toLowerCase();
      console.log('Guess for question 7 is ' + userGuess7);
    }else{
      alert('So close but I lived by Cambridge. The other cities in England you could have choosen were London, Bath, York, Oxford, Manchester, Birmingham, Liverpool, Bristol, Brighton');
    }
  }
}
