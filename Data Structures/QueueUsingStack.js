// Queue implementation using Stacks
class MyQueue {
	constructor() {
		this.stack = [];
		this.stackTemp = [];
	}
	
	empty() {
		return this.stack ===0 && this.stackTemp.length ===0;
	}
	
	peek() {
		if (this.stackTemp.length > 0) {
			return this.stackTemp[0];
		}
		return this.stack[this.stack.length - 1];
	}
	
	push(value) {
		// todo validate the input
		const length = this.stack.length;
		for (let i = 0; i < length; i++) {
			this.stackTemp.push(this.stack.pop());
		}
		this.stackTemp.push(value);
		return this;
	}
	
	pop() {
		const length = this.stackTemp.length;
		for (let i = 0; i < length; i++) {
			this.stack.push(this.stackTemp.pop());
		}
		return this.stack.pop();
		//return this;
	}
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);
//queue.peek();  // returns 1
queue.pop();   // returns 1
//queue.empty(); // returns false
