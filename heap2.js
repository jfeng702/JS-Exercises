// min heap is a binary tree where every parent is smaller than child.
// peek: reveal top node
// push: push element to end of heap, then heapify up
// heapify up: swap last element with parent until it is top level or parent is smaller than child
//

function BinaryHeap() {
  this.array = [];
}

BinaryHeap.prototype = {
  push: function(element) {
    this.array.push(element);
    this.bubbleUp(this.array.length - 1);
  },

  bubbleUp: function(idx) {
    let current  = this.array[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx-1) / 2),
      parent = this.array[parentIdx];
      if (this.array[parentIdx] <= this.array[idx]) {
        break;
      }
      this.array[parentIdx] = current;
      this.array[idx] = parent;
      idx = parentIdx;
    }
  },
  pop: function() {
    let result = this.array[0];
    let end = this.array.pop();
    if (this.array.length > 0) {
      this.array[0] = end;
      // gotta heapify down now
      this.heapifyDown(0);

    }
    return result;
  },

  size: function() {
    return this.array.length;
  },

  remove: function(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== value) {
        continue;
      }
      let end = this.array.pop();

      if (i === this.array.length - 1) {
        break;
      }
      this.array[i] = end;
      // why heapify up?
      // this.bubbleUp(i);
      this.heapifyDown(i);
      break;
    }
  },
  // compare parent to each child
  // swap with the smaller one
  heapifyDown: function(idx) {
    let length = this.array.length;
    let current = this.array[idx];
    while (true) {
      let swap = null;
      let childOne = idx * 2 + 1;
      let childTwo = idx * 2 + 2;
      if (childOne < length) {
        if (this.array[childOne] < this.array[idx]) {
          swap = childOne;
        }
      }

      if (childTwo < length) {
        if (this.array[childTwo] < (swap === null ? this.array[idx] : this.array[childOne])) {
          swap = childTwo;
        }
      }

      if (swap === null) {
        break;
      }

      this.array[idx] = this.array[swap];
      this.array[swap] = current;
      idx = swap;

    }
  }
};

let heap = new BinaryHeap();
heap.push(5);
heap.push(2);
heap.push(2);
heap.push(4);
heap.push(6);
heap.push(1);
heap.remove(2);
while (heap.size() > 0) {
  console.log(heap.pop());
}
