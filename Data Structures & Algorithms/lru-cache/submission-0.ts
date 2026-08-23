class LinkedListNode {
    key: number;
    value: number;
    prev: LinkedListNode | null;
    next: LinkedListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, LinkedListNode>;
    // Dummy nodes to prevent null pointer edge cases
    private head: LinkedListNode;
    private tail: LinkedListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new LinkedListNode(-1, -1);
        this.tail = new LinkedListNode(-1, -1);

        // Connect the dummies: head <-> tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key)!;

        // Since it was accessed, it becomes the Most Recently Used
        this.removeNode(node);
        this.moveToHead(node);

        return node.value;
    }

    put(key: number, value: number): void {
        // If the key already exists, just update the value and move it
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            node.value = value;
            this.removeNode(node);
            this.moveToHead(node);
            return;
        }

        // If it's a new key, create a new node
        const newNode = new LinkedListNode(key, value);
        this.map.set(key, newNode);
        this.moveToHead(newNode);

        // If we exceeded capacity, evict the Least Recently Used (the node right before tail)
        if (this.map.size > this.capacity) {
            const lruNode = this.tail.prev!;
            this.removeNode(lruNode);
            this.map.delete(lruNode.key);
        }
    }

    // --- Helper Functions to keep logic clean ---

    // Plucks a node out of the list and seals the gap
    private removeNode(node: LinkedListNode): void {
        const prevNode = node.prev!;
        const nextNode = node.next!;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // Inserts a node right after the Dummy Head (making it the Most Recently Used)
    private moveToHead(node: LinkedListNode): void {
        const nextNode = this.head.next!;

        node.prev = this.head;
        node.next = nextNode;

        this.head.next = node;
        nextNode.prev = node;
    }
}
