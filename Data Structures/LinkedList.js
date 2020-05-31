/**
 * LinkedList Data Structure implementation in JavaScript
 */

// a simple class to create node for LinkedList
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// LinkedList implementation
class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}
	
	// method to add node to the last
	append(value) {
		// todo: validate the param
		// check if the value is not null/empty
		
		const newTail = new Node(value);
		this.tail.next = newTail;
		this.tail = newTail;
		this.length++
		return this.printListValues();
	}
	
	// method to add node to the first
	prepend(value) {
		// todo: validate the param
		// check if the value is not null/empty
		
		const newHead = new Node(value);
		newHead.next = this.head;
		this.head = newHead;
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
		const newNode = new Node(value);
		newNode.next = leader.next;
		leader.next = newNode;
		this.length++;
		return this.printListValues();
	}
	
	// method to remove node at the given index on the Linked List
	remove(index) {
		// todo validate the given index
		// check if it's +ve number
		// check if the index is greater than length, then we cannot remove a node
		
		// if the index is to remove at 0, then it's easy just update the head node and return
		if (index === 0 ) {
			this.head = this.head.next;
			this.length--;
			return this.printListValues()
		}
		
		const leader = this.traverseToIndex(index - 1);
		let nodeToRemove = leader.next;
		leader.next = nodeToRemove.next;
		
		// if the node to remove is the last node update the the tail node and return
		if (index === this.length - 1) {
			this.tail = leader.next;
		}
		this.length--;
		return this.printListValues()
	}
}

const myLinkedList = new LinkedList(50);
myLinkedList.append(60);
myLinkedList.prepend(30);
myLinkedList.insert(1, 40);
myLinkedList.remove(2);
myLinkedList.printListValues();