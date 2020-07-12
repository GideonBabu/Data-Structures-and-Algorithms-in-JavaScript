/**
 * Insertion sort algorithm
 * @param array
 * @returns {*}
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @see https://en.wikibooks.org/w/index.php?title=Algorithm_Implementation/Sorting/Insertion_sort&stable=0#JavaScript
 */
function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let temp = array[i];
		for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
			array[j+1] = array[j];
		}
		array[j+1] = temp;
	}
	
	return array;
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers);
console.log(numbers);