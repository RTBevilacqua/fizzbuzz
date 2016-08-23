// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by 3 & 5 = fizz buzz

$(document).ready(function(){

//prompt to supply number
var question = (prompt('Guess a number that is divisible by 3, 5, or both!'));
var hat = parseInt(question);

//function takes integer as argument.

// function counts from one to argument value


//function substitutes 'fizz' 'buzz' 'fizzbuzz'

	if (hat % 15 == 0) {
	document.write("fizzbuzz" + '<br>');
	}
	else if ( hat % 5 == 0) {
		document.write("buzz" + '<br>');
	}
	else if (hat % 3 == 0) {
		document.write("fizz" + '<br>');
	}
	else if (isNaN(hat)) {
		alert('Please refresh and enter a number.');
	}
	else {
		document.write(hat + '<br>');
	};
});

