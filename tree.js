class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value){
        if(this.root === null){
            console.log("Tree vacio");
        }
        else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        return console.log("No se encuentra ese valor");
                    }
                    currentNode = currentNode.left;
                }
                else if(value > currentNode.value) {
                    if(!currentNode.right){
                        return console.log("No se encuentra ese valor");
                    }
                    currentNode = currentNode.right;
                }
                else if(value === currentNode.value){
                    return currentNode;
                }
            }
        }
    }
}