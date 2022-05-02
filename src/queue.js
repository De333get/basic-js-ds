const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.firstEl = null;
		this.lastEl = null;
	}
	getUnderlyingList() {
		return this.firstEl;
	}

	enqueue(value) {
		let item = new ListNode(value);
		if (!this.firstEl) {
			this.firstEl = item;
			this.lastEl = this.firstEl;
		} else {
			this.lastEl.next = item;
			this.lastEl = this.lastEl.next;
		}
	}

	dequeue() {
		let value = this.firstEl.value;
		this.firstEl = this.firstEl.next;
		return value;
	}
}

module.exports = {
  Queue
};
