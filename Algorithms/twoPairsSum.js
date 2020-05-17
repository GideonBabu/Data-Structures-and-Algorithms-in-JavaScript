// Check if a pair of values in the given collection adds to the sum given
// return boolean true or false
// eg., [1,2,3,9] sum = 8 should output false
// eg. [1,2,4,4] sum = 8 should output true because 4 plus 4 makes 8

// naive solution with O(n^2)

function hasPairsToSum(arr, sum) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[i] + arr[j] === sum) {
				return true;
			}
		}
	}
	return false;
}


// better solution with O(n) linear time

function hasPairsToSum2(arr, sum) {

	// todo: need to check for correct input 
	// check if input is array with correct expected values
	// return false if either arr or sum is empty/null/undefined
	
	const mySet = new Set();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (mySet.has(arr[i])) {
			return true;;
		}
		mySet.add(sum - arr[i]);
	}
	return false;
}


