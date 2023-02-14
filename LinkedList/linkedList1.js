let head;
let tail;
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function add(data) {
  let newNode = new Node(data);
  if (head == null) {
    head = newNode;
  } else {
    tail.next = newNode;
  }
  tail = newNode;
}
function display() {
  let temp = head;
  if (temp == null) {
    console.log("Empty");
    return;
  }
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function insertAfter(data,key){
    let newNode = new Node(data)
    let  temp = head
    
    while(temp != null && temp.data != key){
        temp = temp.next 
    }
    if(temp==null) return

    if(temp == tail){
        tail.next = newNode
        tail=newNode
        return
    }

    newNode.next = temp.next
    temp.next = newNode
}

function deleteData(key) {
  let temp = head;
  let prev = null;

  if (temp != null && temp.data == key) {
    head = temp.next;
    return;
  }

  while (temp != null && temp.data != key) {
    prev = temp;
    temp = temp.next;
  }

  if (temp == null) {
    return;
  }

  prev.next = temp.next;
  
  if (temp == tail) {
    tail = prev;
    prev.next = null;
    return;
  }
}
add(12);
add(2);
add(132);
display();
deleteData(12)
console.log('after');
display();
insertAfter(111,12)
console.log('after add');
display();
