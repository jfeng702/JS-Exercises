var findKthLargest = function(nums, k) {
// create max heap with push, extract, heapify up and heapify down
// extract k times and last return is the result.
  function BinaryHeap() {
    this.array = [];
  }

  BinaryHeap.prototype = {
    push(el) {
      this.array.push(el);
      this.heapifyUp(this.size() - 1);
    },
    size() {
      return this.array.length;
    },
    heapifyUp(idx) {
      let current = this.array[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2) ;
        if (this.array[idx] <= this.array[parentIdx]) {
          break;
        }
        let parent = this.array[parentIdx];
        this.array[parentIdx] = this.array[idx];
        this.array[idx] = parent;
        idx = parentIdx;
      }
    },
    heapifyDown(idx) {
      let current = this.array[idx];
      while (true) {
        let swap = null;
        let childOne = idx * 2 + 1;
        let childTwo = idx * 2 + 2;
        if (childOne < this.size()) {
          if (this.array[childOne] > this.array[idx]) {
            swap = childOne;
          }
        }
        if (childTwo < this.size()) {
          if (this.array[childTwo] > (swap === null ? this.array[idx] : this.array[childOne])) {
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
    },
    extract() {
      let result = this.array[0];
      let end = this.array.pop();
      if (this.size() > 0) {
        this.array[0] = end;
        this.heapifyDown(0);
      }
      return result;
    }
  };

  let heap = new BinaryHeap();
  for (let el of nums) {
    heap.push(el);
  }
  let answer = null;
  for (let i = 0; i < k; i++) {
    answer = heap.extract();
  }
  return answer;
};

console.log(findKthLargest([3,2,1,5,6,4], 2));

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5


// one method is to sort and find nums.length - k index.
// this option has O(n log n) time

// can we do better?
