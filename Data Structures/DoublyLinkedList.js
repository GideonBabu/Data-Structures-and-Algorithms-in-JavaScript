/**
 * Doubly LinkedList Data Structure implementation in JavaScript
 */

// a simple class to create node for LinkedList
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

// LinkedList implementation
class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}
	
	/**
	 * @desc is the linked list is empty
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.length === 0;
	}
	
	/**
	 * @desc Add a node to head of the linked list, O(1)
	 * @param value
	 * @returns {[]}
	 */
	append(value) {
		// todo: validate the param
		// check if the value is not null/empty
		if (this.isEmpty()) {
			this.head = this.tail = new Node(value);
			return this.printListValues();
		} else {
			const newTail = new Node(value);
			this.tail.next = newTail;
			newTail.prev = this.tail;
			this.tail = newTail;
		}
		
		this.length++
		return this.printListValues();
	}
	
	/**
	 * @desc Add a node to head of the linked list, O(1)
	 * @param value
	 * @returns {[]}
	 */
	prepend(value) {
		// todo: validate the param
		// check if the value is not null/empty
		
		if (this.isEmpty()) {
			this.head = this.tail = new Node(value);
			return this.printListValues();
		} else {
			const newHead = new Node(value);
			newHead.next = this.head;
			this.head.prev = newHead;
			this.head = newHead;
		}
		this.length++
		return this.printListValues();
	}
	// method to return the node values in a array
	printListValues() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	
	traverseToIndex(index) {
		// todo validate the param if it's lesser than the total length of the LL
		let counter = 0;
		let currentNode = this.head;
		// traverse upto if the given index is not equal to the counter
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		// at this point we the the node at the given index to be returned
		return currentNode;
	}
	
	// method to add node to the linked list to the given index
	insert(index, value) {
		// todo validate the param
		
		if (index ===0) {
			this.prepend(value);
			return this.printListValues();
		}
		
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		const newNode = new Node(value);
		newNode.next = follower;
		newNode.prev = leader;
		leader.next = newNode;
		follower.prev = newNode;
		
		this.length++;
		console.log(this);
		return this.printListValues();
	}
	
	// 	get the value of the first node (head) if exists, O(1)
	peekFirst() {
		if (this.isEmpty()) {
			throw new Error("Empty Linked List.");
		}
		return this.head.value;
	}
	
	// get the value of the last node (tail) if exists, O(1)
	peekLast() {
		if (this.isEmpty()) {
			throw new Error("Empty Linked List.");
		}
		return this.tail.value;
	}
	
	// Remove the first node (head) from the linkedlist, O(1)
	removeHead() {
		// validate the current
		if (this.isEmpty()) {
			throw new Error('Empty Linked List. Cannot remove head');
		}
		
		const data = this.head.value;
		this.head = this.head.next;
		this.length--;
		
		// after removing the head, if the size fo the list becomes empty then
		// set the tail null
		if (this.isEmpty()) {
			this.tail = null;
		}
		
		this.head.prev = null;
		
		// return the data that was at the head we removed
		return data;
	}
	
	// Remove the last node (tail) from the linkedlist, O(1)
	removeTail() {
		// validate the current
		if (this.isEmpty()) {
			throw new Error('Empty Linked List. Cannot remove Tail');
		}
		
		const data = this.tail.value;
		this.tail = this.tail.prev;
		this.length--;
		
		// after removing the head, if the size fo the list becomes empty then
		// set the tail null
		if (this.isEmpty()) {
			this.head = null;
		}
		
		this.tail.next = null;
		
		// return the data that was at the last we removed
		return data;
	}
	
	// remove an arbitrary node from the linked list, O(1)
	remove(node) {
		// if the node to remove is somewhere either at the head
		// or at the tail handle this first
		if (node.prev === null) {
			return removeHead();
		}
		if (node.next === null) {
			return removeTail();
		}
		
		// make the pointers of the adjacent nodes to skip over the provided node
		node.prev.next = node.next;
		node.next.prev = node.prev;
		
		// store the data in the node in a temporary variable to return at the last
		const data = node.value;
		
		// null the value of the given node
		node.data = null;
		node = node.prev = node.next = null;
		
		this.length--
		
		// return the data at the node we just removed
		return data;
	}
	// method to remove node at the given index on the Linked List, O(n)
	removeAt(index) {
		// todo validate the given index
		// check if it's +ve number
		// check if the index is greater than length, then we cannot remove a node
		
		if (index < 0 || index >= this.length) {
			throw new Error('invalid argument error to remove node in Linked List');
		}
		
		// if the given index is 0 then remove the head
		if (index === 0) {
			return this.removeHead();
		}
		// if the node to remove is the last node then remove the tail
		if (index === this.length - 1) {
			return this.removeTail();
		}
		
		const leader = this.traverseToIndex(index - 1);
		let nodeToRemove = leader.next;
		return this.remove(nodeToRemove);
	}
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
//myDoublyLinkedList.append(13);
myDoublyLinkedList.insert(1, 99);
//myDoublyLinkedList.prepend(30);
//myDoublyLinkedList.insert(1, 40);
//myDoublyLinkedList.remove(2);
myDoublyLinkedList.printListValues();