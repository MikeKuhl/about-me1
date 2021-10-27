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
  } else {
    document.write(userName);
  }
}

user(userName);



// can I make this into booleen
let userKnow = prompt('Do you know Michael Metcalf?','Yes or No');
switch (userKnow.toLowerCase()) {
case 'y':
//   console.log('this user knows me');
  alert('Well its nice to know you.');
  break;
case 'yes':
//   console.log('this user knows me');
  alert('Well its nice to know you.');
  break;
default:
  console.log('this user doesnt know me');
}

let userLoc = prompt('Are you in the Seattle area?','Yes or No');
switch (userLoc.toLowerCase()) {
case 'y':
//   console.log('this user is in Seattle');
  alert('Maybe we will run into eachother sometime.');
  break;
case 'yes':
//   console.log('this user is in Seattle');
  alert('Maybe we will run into eachother sometime.');
  break;
default:
  console.log('this user is not near me');
}

let userHS = prompt('Did you go to South Kitsap High School?','Yes or No');
switch (userHS.toLowerCase()) {
case 'y':
//   console.log('this user went to SKHS');
  alert('Maybe we had a class together or just passed eachother in the halls.');
  break;
case 'yes':
//   console.log('this user went to SKHS');
  alert('Maybe we had a class together or just passed eachother in the halls.');
  break;
default:
  console.log('this user did not go to SKHS');
}

let userMil = prompt('Have you been in the military?','Yes or No');
switch (userMil.toLowerCase()) {
case 'y':
//   console.log('this user was in the military');
  alert('Maybe we ran into eachother at some point.');
  break;
case 'yes':
//   console.log('this user was in the military');
  alert('Maybe we ran into eachother at some point.');
  break;
default:
  console.log('this user was not in the military');
}

let userCF = prompt('Have you been in a Code Fellows course?','Yes or No');
switch (userCF.toLowerCase()) {
case 'y':
//   console.log('this user went to Code Fellows');
  alert('Fellow Dev, Noice!');
  break;
case 'yes':
//   console.log('this user went to Code Fellows');
  alert('Fellow Dev, Noice!');
  break;
default:
  console.log('this user was not in Code Fellows');
}
