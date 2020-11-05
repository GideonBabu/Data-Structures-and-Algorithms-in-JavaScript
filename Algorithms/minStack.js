/**
 * https://leetcode.com/problems/min-stack/
 * initialize your data structure here.
 * push pop getMin takes O(1) constant time
 */
var MinStack = function() {
    this.items = new Array();
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const item = {data: x};
    if (!this.size) {
        item.min = x;
    } else {
        item.min = (this.getMin() < x) ? this.getMin() : x;    
    }
    this.items.push(item);
    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.size) {
        return;
    }
    this.items.pop();
    this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {    
    return this.items[this.size - 1].data;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.items[this.size - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
