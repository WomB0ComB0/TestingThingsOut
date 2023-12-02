class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(element) {
        const item = this.items[this.backIndex] = element;
        this.backIndex++;
        return item + ' inserted';
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item + ' removed';
    }

    peek() {
        return this.items[this.frontIndex]; // Corrected from this.item to this.items
    }

    get printQueue() {
        return this.items;
    }

    get isEmpty() {
        return this.frontIndex === this.backIndex;
    }
}

const queue = new Queue();
console.log(queue.enqueue(7));
console.log(queue.enqueue(2));
console.log(queue.enqueue(6));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue.peek());
var str = queue.printQueue;
console.log(str);
