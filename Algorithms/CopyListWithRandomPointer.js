/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * time complexity: O(n) where n is the number of nodes in the given input linked list
 * space complexity: O(1)
 */
var copyRandomList = function(head) {
    
    if (head === null) {
        return null;
    }
                        
    let node = head;
    
    // creating new node in between old nodes
    while (node !== null) {
        const newNode = new Node(node.val);
        newNode.next = node.next;
        node.next = newNode;
        node = newNode.next;
    }
    
    // updating random nodes
    
    node = head;
    
    while (node !== null) {
        node.next.random = (node.random === null) ? null : node.random.next;
        node = node.next.next;
    }    
    
    // updating the next node correctly to separate old and new linked list
    
    let oldListNode = head;
    let newListNode = head.next;
    
    let newListHead = head.next;
    
    while (newListNode != null) {
        oldListNode.next = oldListNode.next.next;
        newListNode.next = (newListNode.next === null) 
            ? null 
            : newListNode.next.next;
        
        oldListNode = oldListNode.next;
        newListNode = newListNode.next;
    }
    
    return newListHead;
    
    
};
