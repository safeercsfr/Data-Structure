class minHeap {
    constructor() {
      this.heap = [];
    }
    
    insert(val) {
      for(let i=0;i<val.length;i++){
        this.heap.push(val[i]);
        this.heapifyUp();
      }
    }
    
    heapifyUp(){
      let idx = this.heap.length-1
      while(idx>0 && this.heap[this.parentIdx(idx)]>this.heap[idx]){
        let par = this.parentIdx(idx);
        [this.heap[par],this.heap[idx]] =  [this.heap[idx],this.heap[par]]
        idx = par
      }
    }
  
    delete(){
      this.heap[0] = this.heap[this.heap.length-1]
      this.heap.pop(this.heap.length-1)
      this.heapifyDown(this.heap, this.heap.length, 0)
    }
    
     heapifyDown(array, heapSize, index) {
      let smallest = index;
      const left = this.leftIdx(index)
      const right = this.rightIdx(index)
    
      if (left < heapSize && array[left] < array[smallest]) smallest = left;
    
      if (right < heapSize && array[right] < array[smallest]) smallest = right;
    
      if (smallest !== index) {
        [array[index], array[smallest]] = [array[smallest], array[index]];
        this.heapifyDown(array, smallest, heapSize);
      }
    }
  
    parentIdx(idx) {
      return Math.floor((idx - 1) / 2)
    }
    
    leftIdx(idx) {
      return 2 * idx + 1;
    }
  
    rightIdx(idx) {
      return 2 * idx + 2;
    }
  
    display(){
      for(let i in this.heap){
        console.log(this.heap[i]);
      }
    }
  }
  
  const h = new minHeap()
  h.insert([10,9,8,7,5])
  h.delete()
  h.display()