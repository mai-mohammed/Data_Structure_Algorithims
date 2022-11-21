interface StackInterface<T> {
    peek: () => T | undefined;
    push: (item: T) => void;
    pop: () => T | undefined;
    clear: () => void;
    isEmpty: () => boolean;
    size: () => number;
    print: () => void
}

export default class Stack<T> implements StackInterface<T> {
    private items: T[];
    peek() { return this.items[this.items.length - 1] };
    push(item: T) { this.items.push(item) };
    pop() { return this.items.pop() };
    clear() { this.items = [] };
    isEmpty() { return this.items.length === 0 };
    size() { return this.items.length };
    print() { console.log(this.items) };
    constructor() {
        this.items = [];
    }
}


