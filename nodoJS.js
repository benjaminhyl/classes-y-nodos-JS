class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SingleLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null}
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this; 
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
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
        newNode.next = afterIndexPointer;
        this.length++;
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
let miLista = new SingleLinkedList(1)