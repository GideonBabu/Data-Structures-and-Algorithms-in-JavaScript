const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	let swapped = true;
	let n = array.length;
	while (swapped) {
		swapped = false;
		// change code below this line
		for (let i = 0; i < n - 1; i++) {
			if (array[i] > array[i+1]) {
				swap(i, i+1)
				swapped = true;
			}
		}
		n -= 1;
	}
	
	function swap(i, j) {
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	return array;
}

console.log(bubbleSort(numbers));
//console.log(numbers);