// JavaScript Stack implementation using Array

class Stack {
	constructor() {
		this.data = [];
		this.top = null;
	}
	
	isEmpty() {
		return this.data.length === 0;
	}
	
	size() {
		return this.data.length;
	}
	
	/**
	 * peek the top of the stack without removing
	 * @returns {null|*}
	 */
	peek() {
		if (this.isEmpty()) {
			// return null or throw an error
			return null;
		}
		return this.top;
	}
	
	/**
	 * add/push data to the stack
	 * @param item
	 * @returns {Stack}
	 */
	push(item) {
		// todo validate the provided data if it is valid (not null/undefined)
		
		this.data.push(item);
		this.top = item;
		return this;
	}
	
	/**
	 * pop the data on the top of the stack
	 * @returns {*}
	 */
	pop() {
		if (this.isEmpty()) {
			throw new Error('stack is empty. Unable to pop');
		}
		const pop = this.data.pop();
		// after popping, if the stack size is empty, then set top as null
		this.top = (!this.isEmpty()) ? this.data[this.data.length - 1] : null;
		return pop;
	}
}

const myStack = new Stack();
myStack.push('Apple');
myStack.push('grapes');
myStack.push('orange');
myStack.size();
myStack.pop();
myStack.pop();
myStack.pop();