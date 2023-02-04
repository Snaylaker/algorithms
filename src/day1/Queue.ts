type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = {
            value: item,
        } as Node<T>;
        if (!this.tail || this.length === 0) {
            this.tail = this.head = node;
            this.length++;

            return;
        }
        this.length++;
        console.log(this);
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        let head = this.head;
        this.head = this.head.next;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
