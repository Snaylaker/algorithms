type Node<T> = {
    value: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        this.head = {
            value: item,
            prev: this.head ? this.head : undefined,
        };
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const returnValue = this.head.value;
        this.head = this.head.prev;
        this.length--;
        return returnValue;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
