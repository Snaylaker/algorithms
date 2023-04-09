type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        let newFirstNode = {
            value: item,
            next: this.tail,
        };
        this.length++;
        this.tail = newFirstNode;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length + 1) {
            throw Error();
        }
        this.length++;
        let current = this.tail;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        let newItem = {
            value: item,
            next: current?.next,
        };
        current!.next = newItem;
    }
    append(item: T): void {
        let newItem = {
            value: item,
            next: undefined,
        };
        if (this.length === 0) {
            this.tail = this.head = newItem;
            this.length++;
        } else {
            this.head!.next = newItem;
            this.head = newItem;
            this.length++;
        }
    }
    remove(item: T): T | undefined {
        let current = this.tail;
        for (let i = 0; i < this.length; i++) {
            if (current?.value === item) return this.removeAt(i);
            current = current?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let current = this.tail;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        let actualPostion = this.tail;
        if (idx === 0) {
            let oldValue = this.tail?.value;
            this.tail = this.tail!.next;
            this.length--;
            return oldValue;
        } else {
            for (let i = 0; i < idx; i++) {
                actualPostion = actualPostion!.next;
            }
            let postion5 = this.tail;
            for (let i = 0; i < idx - 1; i++) {
                postion5 = postion5!.next;
            }
            postion5!.next = actualPostion?.next;
            this.length--;
            return actualPostion?.value;
        }
    }
}
