class MyArray {
	
	constructor() {
		this.length = 0;
		this.data = {};
	}

	// method to get array item value at given index
	get(index) {
		// check if the index to get is within the limit of the array length
		if (index >= this.length) {
			throw new Error('invalid index used to get');
		}
		return this.data[index];
	}

	// append an array item to the end of the array
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	// remove an item at the end of the array
	pop() {
		if (this.length === 0) {
			throw new Error('invalid pop operator. Nothing to pop in the array');
		}
		const itemToPop = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return itemToPop;
	}

	// remove 
	deleteAt(index) {
		if (index >= this.length) {
			throw new Error('invalid index used to deleteAt');
		}
		const itemToDelete = this.data[index];
		this.shiftItemsToDelete(index);
		return itemToDelete;
	} 

	// method to shift array items to left a index to delete
	shiftItemsToDelete(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];			
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	// method to insert array item in a given index
	insertAt(index, value) {
		if (index >= this.length) {
			throw new Error('invalid index used to insertAt');
		}
		this.shiftItemsToInsert(index);
		this.data[index] = value;
    	this.length++;	
		return this.length;
	}

	// method to shift item to the right a index to insert new array item
	shiftItemsToInsert(index) {
		if (index >= this.length) {
			throw new Error('invalid index used to shiftItemsToInsert');
		}
		for (let i = this.length; i <= index; i++) {
			this.data[i] = this.data[i - 1];
		}
	}
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('how');
myArray.push('are');
myArray.insertAt(1, 'hello');
console.log(myArray);