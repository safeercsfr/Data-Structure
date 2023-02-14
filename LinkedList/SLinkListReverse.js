class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class LL {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(data) {
      let newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next != null) {
          temp = temp.next;
        }
        temp.next = newNode;
      }
      this.size++;
    }
  
    re() {
      let pre = null;
      let cur = this.head;
      while (cur != null) {
          let nex=cur.next
          cur.next=pre
          pre=cur
          cur=nex
      //   let nex = cur.next;
      //   cur.next = pre;
      //   cur = nex
      //   pre=cur
      }
      this.head = pre
      return;
    }
    display() {
      let m = this.head;
      while (m != null) {
        console.log(m.data);
        m = m.next;
      }
    }
  }
  let ll = new LL();
  ll.add(8);
  ll.add(81);
  ll.add(83);
  ll.add(84);
  ll.add(85);
  ll.add(86);
  
  ll.re()
  ll.display();
  console.log();
  