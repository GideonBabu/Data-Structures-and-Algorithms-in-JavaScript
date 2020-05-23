// Given two input of array of numbers in a sorted manner
// sort the two array into a single array and return
// input [0,3,4,31] [3,4,6,30]
// output [0,3,3,4,6,30,31]

function mergeTwoSortedArrays(array1, array2) {
	// validate the input
	// check if both array inputs are given
	// check if both inputs are array using typeof
	// check for null or undefined

	// if one of the input array is empty we can easily return the 
	// other array

	if (array1.length === 0) {
		return array2;
	} else if (array2.length === 0) {
		return array1;
	}

	const mergedArray = [];
	let i = 0;
	let j = 0;	

	while (array1[i] || array2[j]) {

		if (array1[i] < array2[j] || array2[j] === undefined) {
			mergedArray.push(array1[i]);
			i++;
		} else {
			mergedArray.push(array2[j]);
			j++;
		}

	}
	return mergedArray;
}

mergeTwoSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])