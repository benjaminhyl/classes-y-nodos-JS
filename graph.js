class Graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
}