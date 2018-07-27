class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);
