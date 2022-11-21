interface QueueInterface<T> {
    enqueue: (item: T) => void;
    dequeue: () => T | undefined;
    clear: () => void;
    isEmpty: () => boolean;
    size: () => number;
    print: () => void
}

export default class Queue<T> implements QueueInterface<T> {
    private items: T[];
    enqueue(item: T) { this.items.push(item) };
    dequeue() { return this.items.shift() };
    clear() { this.items = [] };
    isEmpty() { return this.items.length === 0 };
    size() { return this.items.length };
    print() { console.log(this.items) };
    constructor() {
        this.items = [];
    }
}