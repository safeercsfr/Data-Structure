class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(array) {
    for (let i = 0; i < array.length; i++) {
      this.heap.push(array[i]);
      this.heapifyUp();
    }
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0 && this.heap[this.parIdx(idx)] < this.heap[idx]) {
      let par = this.parIdx(idx);
      [this.heap[par], this.heap[idx]] = [this.heap[idx], this.heap[par]];
      idx = par;
    }
  }


  heapifyDown(){
    let idx = 0 
    while(this.leftIdx(idx)<this.heap.length){
      let l = this.leftIdx(idx)
      let r = this.rightIdx(idx)
      let max = l

      if(r > this.heap.length && this.heap[r]>this.heap[max]){
        max = r
      }

      if(this.heap[max] < this.heap[idx]) break;
      
      [this.heap[max], this.heap[idx]] = [this.heap[idx], this.heap[max]];

      idx = max
    }
  }

  sort(){
    let heapSize = this.heap.length
    let id = 0
    for (let i = heapSize - 1; i > 0; i--) {
      console.log('id=',id);
      [this.heap[id], this.heap[i]] = [this.heap[i], this.heap[0]];
      heapSize--;
      id++
      this.heapifyDown();
    }
  }

  delete(){
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop(this.heap.length-1)
    this.heapifyDown()
  }

  dis() {
    let i = 0;
    for (i in this.heap) {
      console.log(this.heap[i]);
    }
  }

  parIdx(idx) {
    return parseInt((idx - 1) / 2);
  }
  leftIdx(idx) {
    return 2 * idx + 1;
  }
  rightIdx(idx) {
    return 2 * idx + 2;
  }
}

const m = new MaxHeap();
m.insert([9, 10, 23, 56, 7, 8]);
m.dis();
console.log('ki');
// m.delete()
m.sort()
m.dis();
