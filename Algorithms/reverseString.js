// Create a funciton that reverse a string
// 'Hi My name is Gideon' should output
// 'noedig si eman yM iH'

function reverse(str) {
	// validate the input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'invalid input provided to reverse a string';
	}

	const reversed = [];
	for (let i = str.length - 1; i >= 0; i--) {
		reversed.push(str[i]);
	}

	return reversed.join('');
}

// another solution with built-in array split/reverse

function reverse2(str) {
	// todo validate input

	return str.split('').reverse().join('');
}

// another solution with ES6 syntax and array function

const reverse3 = str => str.split('').reverse().join('');

// another solution with spread operator

const reverse4 = str => [...str].reverse().join('');

reverse('Hi My name is Gideon');