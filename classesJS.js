class MyArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++
        return this.data;
    }
    pop(){
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index; i<this.length; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
    shift() {
        let firstItem = this.data[0]
        if (firstItem == null) {
          return undefined
        }
        for (let i = 0; i < this.length-1; i++){
          this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--;
        return firstItem;
      }
}
const myarray = new MyArray();