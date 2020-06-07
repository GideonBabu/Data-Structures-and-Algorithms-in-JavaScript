// Given a string made up of the following brackets ()[]{}
// determine whether brackets properly match
// examples
// [{}] - true
// (()()) - true
// {] - false
// [()]))() - false
// []{}({}) - true

function isValidateBrackets(string) {
	// todo validate the provided input check for null values
	// check if it has only the symbols allowed
	// if the string has only one char, can return invalid immediately
	
	const brackets = string.split('');
	let stack = [];
	for (let i = 0; i < brackets.length; i++) {
		// if symbol is open bracket, push it to the stack
		if (isOpen(brackets[i])) {
			stack.push(brackets[i]);
		} else if (isClose(brackets[i])) { // when close bracket is found, check if it's pair of the stack top value
			if (stack.length === 0 || !isPair(brackets[i], stack.pop())) {
				// if it's not a pair return invalid
				return false;
			}
		}
	}
	// after looping over all the symbols, not if the stack is empty return true otherwise false
	return stack.length === 0;
}

// check the provided symbol if it is open brackets
function isOpen(symbol) {
	return symbol === '(' || symbol === '[' || symbol === '{';
}

// check if the provided symbol is one of the closing brackets
function isClose(symbol) {
	return symbol === ')' || symbol === ']' || symbol === '}';
}

// check if the provided arguments are pairs of brackets (open and closing)
// returns boolean (true/false)
function isPair(close, top) {
	if (close === ')') {
		return top === '(';
	}
	if (close === ']') {
		return top === '[';
	}
	if (close === '}') {
		return top === '{';
	}
	return false;
}

isValidateBrackets('[{}]');
isValidateBrackets('[[{}]()]');
isValidateBrackets('[{})[]');
