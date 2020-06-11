/*
 * Queue implementation using singly Linked List
 */

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

// Queue Class
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	
	/**
	 * returns the size of the queue
	 * @returns {number}
	 */
	size() {
		return this.length;
	}
	
	/**
	 * check if the queue is empty
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.length === 0;
	}
	
	/**
	 * peek the first element of the queue
	 * @returns {*}
	 */
	peek() {
		if (this.isEmpty()) {
			throw new Error('Unable to peek. Queue is Empty.');
		}
		return this.first.data;
	}
	
	/**
	 * add element to the back of the queue
	 * @param elem
	 * @returns {Queue}
	 */
	enqueue(elem) {
		const newNode = new Node(elem);
		// when queue is empty just assign the newNode to both first and last
		// else change the current last pointer to this newNode and
		// assign the last node to refer to the newNode
		if (this.isEmpty() === 0) {
			this.first = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;
		this.length++;
		return this;
	}
	
	/**
	 * removes element from the front of the queue
	 * @returns {*}
	 */
	dequeue() {
		// when queue empty nothing to dequeue, return null
		// alternatively error msg can also be thrown
		if (this.isEmpty()) {
			return null;
		}
		// when queue size is one, then set last node as null
		if (this.size() === 1) {
			this.last = null;
		}
		const remove = this.first;
		this.first = this.first.next;
		this.length--;
		return remove.data;
	}
}

const myQueue = new Queue();
myQueue.enqueue('apple');
myQueue.peek();
myQueue.enqueue('pineapple');
myQueue.enqueue('orange');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();