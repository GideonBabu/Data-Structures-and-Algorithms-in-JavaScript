/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.front = null;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 * time complexity: O(1)
 */
MyQueue.prototype.push = function(x) {
    if (this.s1.empty()) {
        this.front = x;
    }
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 * time complexity: amortized O(1), worst case O(1)
 */
MyQueue.prototype.pop = function() {
    if (this.s2.empty()) {
        while (!this.s1.empty()) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 * time complexity: O(1)
 */
MyQueue.prototype.peek = function() {
    if (!this.s2.empty()) {
        return this.s2.peek();
    }
    return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 * time complexity: O(1)
 */
MyQueue.prototype.empty = function() {
    return this.s1.empty() && this.s2.empty();
};

class Stack {
    constructor() {
        this.data = new Array();
    }
    
    push(val) {
        this.data.push(val);
    }
    
    pop() {
        return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length - 1];
    }
    
    empty() {
        return this.data.length === 0;
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
