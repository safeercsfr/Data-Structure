class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}
class StackMid{
  constructor() {
    this.head = null
  }
  push(data){
    const newnode = new Node(data)
    newnode.next = this.head
    this.head = newnode
  }
  pop(){
    if(this.head ==null) return console.log('empty'); 
    this.head= this.head.next
  }
  dis(){
    let t = this.head
    while(t!=null){
      console.log(t.data);
      t = t.next
    }
  }
  mid(){
    if(this.head==null) return 'stack empty'
    let slow = this.head
    let fast = this.head
    if(slow.next == null) return 'only 1 value array'
    while(fast !==null && fast.next !== null){
      slow = slow.next
      fast = fast.next.next
    }
    return slow.data
  }
}

let a = new StackMid()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
a.pop()
console.log('mid=',a.mid());
a.dis()