/********************************************************
 In a Binary Search Tree (BST), an Inorder Successor of
 a node is defined as the node with the smallest key greater
 than the key of the input node (see examples below).
 Given a node inputNode in a BST, you’re asked to write a function
 findInOrderSuccessor that returns the Inorder Successor of inputNode.
 If inputNode has no Inorder Successor, return null.
 		20
       /  \
      9    25
     / \
    5  12
       / \
      11  14
 
 In this diagram,
 the inorder successor of 9 is 11 and
 the inorder successor of 14 is 20
 the inorder successor of 25 doesn't exist
 ********************************************************/



// Constructor to create a new Node
function Node(key) {
	this.key = key;
	this.parent = null;
	this.left = null;
	this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
	this.root = null;
}

/**
 * Time complexity - O(h) where h is the height of the binary tree
 * Space complexity - O(1)
 */
BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
	
	// case: if node has right child
	if (inputNode.right) {
		return this.findMin(inputNode.right);
	}
	
	// case: if right child is null
	// find the parent which has next immediate bigger value
	if (inputNode.right === null) {
		return this.findNextMax(inputNode);
	}
	
}

BinarySearchTree.prototype.findNextMax = function(node) {
	let parent = node.parent;
	while (parent !== null && parent.key < node.key) {
		parent = parent.parent;
	}
	return (parent) ? parent : null;
}

/**
 * find the minimum node and returns
 * input should be root node to find the min value
 */
BinarySearchTree.prototype.findMin = function(root) {
	let node = root;
	
	while (node.left !== null) {
		node = node.left;
	}
	
	return node;
	
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
	
	var root = this.root;
	
	// 1. If the tree is empty, create the root
	if(!root) {
		this.root = new Node(key);
		return;
	}
	
	// 2) Otherwise, create a node with the key
	//    and traverse down the tree to find where to
	//    to insert it
	var currentNode = root;
	var newNode = new Node(key);
	
	while(currentNode !== null) {
		if(key < currentNode.key) {
			if(!currentNode.left) {
				currentNode.left = newNode;
				newNode.parent = currentNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if(!currentNode.right) {
				currentNode.right = newNode;
				newNode.parent = currentNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
	var currentNode = this.root;
	
	while(currentNode) {
		if(key === currentNode.key) {
			return currentNode;
		}
		
		if(key < currentNode.key) {
			currentNode = currentNode.left;
		}
		else {
			currentNode = currentNode.right;
		}
	}
	
	return null;
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(25);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if(succ) {
	console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
	console.log("Inorder successor does not exist");
}