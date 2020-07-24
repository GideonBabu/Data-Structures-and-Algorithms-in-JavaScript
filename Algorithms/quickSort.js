/**
 * Quick sort algorithm using end pivot technique / Lomuto partition scheme
 * @see https://en.wikipedia.org/wiki/Quicksort
 * Time complexity Average O(nlogn) / worst case O(n2) https://www.bigocheatsheet.com/
 * Space complexity O(logn)
 */
function quickSort(array, start, end) {
  if (start < end) {
    let partitionIndex = partition(array, start, end);
    quickSort(array, start, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, end);
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function partition(array, start, end) {
  const pivotIndex = end
  const pivot = array[pivotIndex];
  let partitionIndex = start;
  for (let i = start; i <= end; i++) {
    if (array[i] < pivot) {
      swap(array, partitionIndex, i);
      partitionIndex = partitionIndex + 1;
    }
  }

  swap(array, partitionIndex, pivotIndex);
  return partitionIndex;
}

function swap(array, index, index2) {
  const temp = array[index];
  array[index] = array[index2];
  array[index2] = temp;
}

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [3, 7, 8, 5, 2, 1, 9, 5, 4];

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);