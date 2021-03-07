class Node {
    name = "";
    data = null;
    next = null;
    constructor(name, data) {
        
        this.name = name;
        this.data = data || this.name;    
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
    getName() {
        return this.name;
    }
    getData() {
        return this.data;
    }
    setData(newData) {
        this.data = newData;
    }
}

module.exports = Node;