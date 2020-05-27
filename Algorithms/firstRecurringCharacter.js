// Given an array of integer or character
// return the first recurring character
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// should return 1

// Given an array = [2,3,4,5]
// should return undefined

// naive solution
// Time - O(n^2)
// space - O(1)

const firstRecurringChar = (input) => {

	// todo validate the input
	// check for not null, empty values, empty array, array with one element
	let recurringIndex;
	for (let i = 0; i < input.length - 1; i++) {
		for (let j = i + 1; j < input.length; i++) {
			if (input[i] === input[j]) {
				if (!recurringIndex || recurringIndex < j) {
					recurringIndex = j;
				}
			}
		}
	}

	return (recurringIndex) ? input[recurringIndex] || undefined;
};

// a better solution with hash table/ hash set
// Time - O(n)
// space - O(n)

const firstRecurringChar2 = (input) => {
	// todo validate the input
	// check for not null, empty values, empty array, array with one element

	// create a new Set to store the seen array inputs
	const seen = new Set();
	// iterate through the given array of inputs
	for (let i = 0; i < input.length; i++) {
		// if char is already in Set, then this is the first recurring character, return the value
		if (seen.has(input[i])) {
			return input[i];
		}

		// if not, then add this value to set
		seen.add(input[i]);
	}

	// if none of the array input is recurring, then return undefined
	return undefined;
}