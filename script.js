// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by 3 & 5 = fizz buzz



for (num = 0; num < 101; num++) {
	if (num % 15 == 0) {
	document.write("fizzbuzz" + '<br>');
	}
	else if ( num % 5 == 0) {
		document.write("buzz" + '<br>');
	}
	else if (num % 3 == 0) {
		document.write("fizz" + '<br>');
	}
	else {
		document.write(num + '<br>');
	}
};


