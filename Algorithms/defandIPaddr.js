/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 * Time - O(n) where n is the no. of characters in given IP address
 * Space - O(n) we use additional array DS to store the result and combine and return as a string
 */
var defangIPaddr = function(address) {
	let defangedArr = [];
	
	for (let i = 0; i < address.length; i++) {
		const char = address.charAt(i);
		if (char === '.') {
			defangedArr.push('[.]');
		} else {
			defangedArr.push(char);
		}
	}
	
	let defangedIP = '';
	
	for (let c of defangedArr) {
		defangedIP += c;
	}
	
	return defangedIP;
};