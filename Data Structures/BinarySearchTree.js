/**
 * Binary Search Tree Data Structure implementation in JavaScript
 */

// a simple class to create nodes for Trees
class Node {
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

// main Binary Search Tree class
class BinarySearchTree {
	constructor(){
		this.root = null;
	}
	
	// insert method to add new node to the tree
	// O(log N)
	insert(value){
		// todo: validate the input
		
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let trav = this.root;
			while (true) {
				// left
				if (value < trav.value) {
					if (!trav.left) {
						trav.left = newNode;
						return this;
					}
					trav = trav.left;
				} else {
					// right
					if (!trav.right) {
						trav.right = newNode;
						return this;
					}
					trav = trav.right;
				}
			}
		}
		return this;
	}
	
	// search through the tree to find if the value exists in the tree nodes
	// O(log N)
	lookup(value) {
		// todo: validate the input
		
		let trav = this.root;
		while (true) {
			if (trav === null) {
				return false;
			} else if (trav.value === value) {
				return trav;
			} else if (trav.value < value) {
				trav = trav.right;
			} else {
				trav = trav.left;
			}
		}
		
		
	}
	
	// deletes a node from the binary search tree and update the nodes correctly
	delete(root, find) {
		if (root === null) {
			return null;
		} else if (find < root.value) {
			root.left = this.delete(root.left, find);
		} else if (find > root.value) {
			root.right = this.delete(root.right, find);
		} else {
			// Case 1:  No child
			if (root.left === null && root.right === null) {
				root = null;
			}
			// case 2: one child either left or right
			else if (root.left === null) {
				root = root.right;
			}
			
			else if (root.right === null) {
				root = root.left;
			}
			// case 3: has both 2 children left and right
			else {
				// find minimum value of the right sub tree
				const min = this.findMin(root.right);
				root.value = min.value;
				root.right = this.delete(root.right, min.value);
			}
		}
		return root;
	}
	
	findMin(node) {
		while (node.left !== null) {
			node = node.left;
		}
		return node;
	}
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(11);
tree.delete(tree.root, 5);
JSON.stringify(traverse(tree.root));

/* Creating an example binary search tree
		 5
	   /   \
	  3     10
	 / \   /  \
	1   4 6   11
*/

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}