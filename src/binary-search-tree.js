const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
};

class BinarySearchTree {

	constructor() {
		this.Root = null;
	};

	root() {
		return this.Root;
	}

	add(data) {
		let node = new Node(data);
		if (!this.Root) {
			this.Root = node;
		} else {
			this.insert(this.Root, node);
		}
	}

	insert(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insert(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insert(node.right, newNode);
			}
		}
	}

	has(data) {
		if (!this.Root) {
			return false;
		} else {
			let findedNode = this.searchNode(this.Root, data);
			if (findedNode && findedNode.data) {
				return findedNode.data === data;
			} else {
				return false;
			}
		}
	}

	find(data) {
		if (!this.Root) {
			return null;
		} else {
			let findedNode = this.searchNode(this.Root, data);
			if (findedNode) {
				return findedNode;
			} else {
				return null;
			}
		}
	}

	searchNode(node, data) {
		if (!node) {
			return null;

		} else if (data < node.data) {
			return this.searchNode(node.left, data);

		} else if (data > node.data) {
			return this.searchNode(node.right, data);

		} else {
			return node;
		}
	}

	remove(data) {
		this.Root = this.removeNode(this.Root, data);
	}

	removeNode(node, data) {
		if (!node) {
			return null;

		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;

		} else if (data > node.data) {
			node.right = this.removeNode(node.right, data);
			return node;

		} else {

			if (node.left === null && node.right === null) {
				node = null;
				return node;
			};

			if (node.left === null) {
				node = node.right;
				return node;

			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			let min = this.findMinNode(node.right);
			node.data = min.data;

			node.right = this.removeNode(node.right, min.data);
			return node;
		}
	}

	min() {
		let minNode = this.findMinNode(this.Root);
		return minNode.data;
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}

	max() {
		let maxNode = this.findMaxNode(this.Root);
		return maxNode.data;
	}

	findMaxNode(node) {
		if (node.right === null) {
			return node;
		} else {
			return this.findMaxNode(node.right);
		}
	}
}

module.exports = {
  BinarySearchTree
};
