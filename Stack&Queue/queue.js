class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class queue {
    constructor() {
      this.rear = null;
      this.front = null;
      this.count = 0;
      this.max = 5;
    }
  
    Enqueue(val) {
      const newNode = new Node(val);
      if (this.max == this.count) {
        console.log("stack overflow");
      } else {
        this.count++;
        if (this.rear == null) {
          this.rear = this.front = newNode;
          return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
    Dequeue() {
      if (this.front == null) {
        this.rear = null;
        console.log("empty");
        return;
      }
      this.front = this.front.next;
      this.count--;
    }
  
    display() {
      let temp = this.front;
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  
  let s = new queue();
  s.Enqueue(3)
  s.Enqueue(4)
  s.Enqueue(5)
  s.Enqueue(6)
  s.Enqueue(7)
  s.Dequeue();
  s.Dequeue();
  s.Enqueue(8)
  s.Enqueue(28)
  s.Enqueue(18)
  
  s.display();
  