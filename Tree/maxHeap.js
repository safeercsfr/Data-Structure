class maxHeap {
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
    while(idx>0 && this.heap[this.parentIdx(idx)]<this.heap[idx]){
      let par = this.parentIdx(idx);
      [this.heap[par],this.heap[idx]] =  [this.heap[idx],this.heap[par]]
      idx = par
    }
  }

  delete(){
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop(this.heap.length-1)
    this.heapifyDown()
  }
  
  heapifyDown() {
   let idx = 0
   while(this.leftIdx(idx) < this.heap.length){
    let left = this.leftIdx(idx)
    let right = this.rightIdx(idx)
    let big = left

    if(right>this.heap.length && this.heap[right]>this.heap[big]){
      big = right
    }

    if(this.heap[big] < this.heap[idx]) break;

    [this.heap[big],this.heap[idx]] =[this.heap[idx],this.heap[big]] 
    idx = big
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
    let i=0
    for(i in this.heap){
      console.log(this.heap[i]);
    }
  }
}

const h = new maxHeap()
h.insert([10,9,8,7,5])
h.insert(10)
h.insert(9)
h.insert(8)
h.insert(7)
h.insert(5)
h.display()
console.log('after delete');
h.delete()
h.display()
