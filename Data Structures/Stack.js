// Stack implementation using LinkedList

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	
	isEmpty() {
		return this.length === 0;
	}
	
	size() {
		return this.length;
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
		return this.top.data;
	}
	
	/**
	 * add/push data to the stack
	 * @param data
	 * @returns {Stack}
	 */
	push(data) {
		// todo validate the provided data if it is valid (not null/undefined)
		
		const newTop = new Node(data);
		newTop.next = this.top;
		this.top = newTop;
		// when pushing first item, set the bottom as top
		if (this.bottom === null) {
			this.bottom = this.top;
		}
		this.length++
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
		const pop = this.top;
		this.top = this.top.next;
		
		// when popping the last element in the stack, set bottom null
		if (this.top === null) {
			this.bottom = null;
		}
		// when popping the last previous element, set the bottom as top
		if (this.top.next === null) {
			this.bottom = this.top;
		}
		this.length--;
		return pop.data;
	}
}

const myStack = new Stack();
myStack.push('Apple');
myStack.push('grapes')
myStack.push('orange');
myStack.size();
myStack.pop();
myStack.pop();
myStack.pop();