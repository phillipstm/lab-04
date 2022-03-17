'use strict';
console.log('I\'m hustling.');

let userName = prompt('What is your name?');

let help = prompt('Do you need help, ' + userName + '?');
console.log('Do you need help',help);


let message;

if('yes' || 'YES' || 'Yes'){
  message = 'Do you need the phone number?';
} else if('no' || 'NO' || 'No'){
  message = 'Do you need address?';
} else if ('maybe' || 'MAYBE' || 'Maybe'){
  message = 'Good Evening';
} else {
  message = 'Your input does not work for a time.';
} 



document.write('Hello ' + userName +  '! '   + message);