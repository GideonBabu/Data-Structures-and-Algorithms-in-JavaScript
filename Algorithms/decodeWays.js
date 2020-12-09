/**
 * https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 * Time - O(n) where n - # of characters in the string
 * Space - (n)
 * @author https://www.linkedin.com/in/gideon-babu/
 */
var numDecodings = function(s) {
	const memo = new Array(s.length).fill(-1);
	return decode(s, 0, memo);
};

var decode = function(s, index, memo) {
	if (index >= s.length) {
		return 1;
	}
	
	if (memo[index] !== -1) {
		return memo[index];
	}
	
	let sumWays = 0;
	
	for (let i = 1; i <= 2; i++) {
		if (index + i <= s.length) {
			const sub = s.substring(index, index + i);
			if (isValid(sub)) {
				// call recursively by increasing the index by i
				// either picking one or two characters
				sumWays += decode(s, index + i, memo);
			}
		}
	}
	
	memo[index] = sumWays;
	
	return memo[index];
};

var isValid = function(s) {
	switch (s) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
		case '12':
		case '13':
		case '14':
		case '15':
		case '16':
		case '17':
		case '18':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
		case '24':
		case '25':
		case '26':
			return true;
		default:
			return false;
	}
}