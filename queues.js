class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return this;
    }
    //Elimina el primer elemento
    dequeue(){
        if(this.length === 0){
            return "No hay elemento para eliminar"
        }
        else if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        else if(this.length > 1){
            let holdingPointer = this.first.next;
            this.first = holdingPointer;
        }
        this.length--;
        return this;
    }
}