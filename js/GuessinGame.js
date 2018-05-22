

var secretNumber = 4;

var guess = prompt("Guess a number");

var guessNo = number(guess);

if(secretNumber === guessNo)
{
	alert("You guessed a right number");
	console.log();
}

else if (guessNo > secretNumber)
{
	alert("Your number is too high");
}

else
{
	alert("Your number is too small");
}