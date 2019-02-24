class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoblyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this; 
  }

  pop () {
    if (this.length === 0) return;
    let currTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currTail.prev;
      this.tail.next = null;
      currTail.prev = null;
    }
    this.length -= 1;
    return currTail;
  }

  shift() {
    if (this.length === 0) return;
    let currHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currHead.next;
      this.head.prev = null;
      currHead.next = null;
    }
    this.length -= 1;
    return currHead;
  }

  unshift (val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= this.length/2) {
      let counter = 0;
      let currNode = this.head;      
      while (index !== counter) {
        currNode = currNode.next;
        counter++;
      }      
      return currNode;
    } else {
      let counter = this.length - 1;
      let currNode = this.tail;      
      while (index !== counter) {
        currNode = currNode.prev;
        counter--;
      }
      return currNode;
    }
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    } else if(index === this.length) {
      return !!this.push(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
      prevNode.next.prev = newNode;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if(index === 0) return !!this.pop();
    if(index === this.length - 1) return !!this.shift();

    let removedNode = this.get(index);
    let prev = removedNode.prev;
    let next = removedNode.next;
    prev.next = next;
    next.prev = prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
 
}

let list = new DoblyLinkedList;
list.push(2);
list.push(4);
list.push(6);
list.push(19);