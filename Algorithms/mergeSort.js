/**
 * Merge sort algorithm
 * @param array
 * @returns {[]|*}
 * @see https://en.wikipedia.org/wiki/Merge_sort
 * O(n logn) - time complexity
 * O(n) - space complexity
 */
function mergeSort (array) {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left
	mid = Math.floor(array.length / 2);
	//console.log(mid);
	const left = array.slice(0, mid);
	const right = array.slice(mid);
	console.log('left ', left);
	console.log('right ',right);
	
	return merge(
		mergeSort(left),
		mergeSort(right)
	);
}

function merge(left, right) {
	let i = 0;
	let j = 0;
	const sorted = [];
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			sorted.push(left[i]);
			i++;
		} else {
			sorted.push(right[j]);
			j++;
		}
	}
	// can use this while as well
	// while (i < left.length) {
	//   sorted.push(left[i]);
	//   i++;
	// }
	// while (j < right.length) {
	//   sorted.push(right[j]);
	//   j++;
	// }
	if (i < left.length) {
		sorted.push(...left.slice(i));
	}
	if (j < right.length) {
		sorted.push(...right.slice(j))
	}
	return sorted;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);