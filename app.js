'use strict';
console.log('I\'m hustling.');
let userName;

function getUserInput(){  
  userName = prompt('What is your name?');
  console.log(userName);
}




function phoneNumber(){
  let help = prompt('Do you need the phone number, ' + userName + '?');
  console.log('Do you need phone number',help);

  if('yes' || 'YES' || 'Yes'){
  let message = alert('867-5309');

  } else if('no' || 'NO' || 'No')
  {
    alert('Ok, Thank You have a nice day');
  
  }
}



