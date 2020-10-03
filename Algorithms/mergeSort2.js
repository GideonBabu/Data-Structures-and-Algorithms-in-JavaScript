function mergeSort(array) {
  // change code below this line
  let helper = [];
  mergeSortRecurse(array, helper, 0, array.length - 1);
  // change code above this line
  return array;
}

function mergeSortRecurse(array, helper, low, high) {
  if (low < high) {
    const middle = Math.floor(low + (high - low) / 2);
    mergeSortRecurse(array, helper, low, middle);
    mergeSortRecurse(array, helper, middle + 1, high);
    return merge(array, helper, low, middle, high);
  }
}

function merge(array, helper, low, middle, high) {
  for (let i = low; i <= high; i++) {
    helper[i] = array[i];
  }

  let helperLeft = low;
  let helperRight = middle + 1;
  let current = low;

  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      array[current] = helper[helperLeft];
      helperLeft++;
    } else {
      array[current] = helper[helperRight];
      helperRight++;
    }
    current++;
  }

  if (helperLeft <= middle) {
    const remaining = middle - helperLeft;
    for (let i = 0; i <= remaining; i++) {
      array[current + i] = helper[helperLeft + i];
    }
  }
  
  return array;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
