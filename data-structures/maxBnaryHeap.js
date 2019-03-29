class MaxBynaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let indx = this.values.length - 1;
    const element = this.values[indx];
    while (true) {
      let parentIndx = Math.floor((indx - 1)/2);
      let parent = this.values[parentIndx];
      if (element <= parent) break;
      this.values[indx] = parent;
      this.values[parentIndx] = element;
      indx = parentIndx;
    }
  }

  sinkDown() {
    let idx = 0;
    const { length } = this.values;
    let element = this.values[idx];
    while (true) {
      let leftIdx = Math.floor(2*idx) + 1;
      let rightIdx = Math.floor(2*idx) + 2;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right > element)
          || (swap !== null && right > left)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
  }

}