/**
 * Selection sort algorithm
 * @param array
 * @returns {*}
 * @see https://en.wikipedia.org/wiki/Selection_sort
 */
function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let jMin = i;
		for (let j = i+1; j < array.length; j++) {
			if (array[j] < array[jMin]) {
				jMin = j;
			}
		}
		if (jMin !== i) {
			swap(i, jMin);
		}
	}
	
	function swap(i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers);
console.log(numbers);