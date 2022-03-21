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
  
  
//declaring a function and giving it a name so that we can call this group of instruction
function guessANumber() {
	let answer = alert();
	console.log('Guess a number between 1-10', answer); //declare a variable

	//while loop example
	do {
		answer = prompt('Guess a number between 1-10');
		if (answer != 3) {
			alert('try again!');
		} else {
			alert('you are correct!');
		}
		//in a do while loop the 'do' always run first no matter what. 
	} while (answer != 3);

	{
	    guessANumber();
	}
}

function displayRating(){
  let output = '';
  let rating = prompt('On a scale of 1-5, how many stars?');

  for(let i = 0; i < rating; i = i + 1){
   output = output +  '<img src="images/pawprint.png" height="50px" width="50px">';
  }
   return document.write(output);
}

let speed = 90;
if (speed < 80) {
   console.log("Warning: You are driving above 80 mph");
} else {
   console.log("You are driving within the speed limit");
}




}