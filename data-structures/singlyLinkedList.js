class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.length) return;
    let curr = this.head;
    let prev = curr;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;    
    }
    return curr;
  }

  shift() {
    if (this.length === 0) return;
    let currHead = this.head;
    this.head = currHead.next;
    this.length -= 1;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;    
    }
    return currHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    let currNode = this.head;
    for (let i = 0; i !== index; i +=1) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let node = this.get(index - 1);
    if (!node) return false;
    newNode.next = node.next;
    node.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let currNode = prevNode.next;
    prevNode.next = currNode.next;
    this.length -= 1;
    return currNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node; 
      node = next;      
    }
    return this;
  }

  print () {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;      
    }
    console.log(arr);
  }

}

let list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(45);
list.push(-3435);