class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this; 
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const indexNode = this.getIndex(index-1);
        const afterIndexPointer = indexNode.next;
        indexNode.next = newNode;
        afterIndexPointer.prev = newNode;
        newNode.next = afterIndexPointer;
        newNode.prev = indexNode; 
        this.length++;
        return this;
    }
    remove(index) {
        if (index >= this.length) {
            console.log("index fuera de rango");
            return;
        }
        let indexToRemove = this.getTheIndex(index);
        let nextPointer = indexToRemove.next;
        let prevPointer = indexToRemove.prev;
        if (prevPointer && nextPointer) {
            prevPointer.next = nextPointer;
            nextPointer.prev = prevPointer;
        } else if (!prevPointer) {
            nextPointer.prev = null;
            this.head = nextPointer;
        } else if (!nextPointer) {
            prevPointer.next = null;
            this.tail = prevPointer;
        }
        this.length--;
        return this;
    }
    getIndex(index){
        let currentNode = this.head;
        for(let i = 0; i<index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

