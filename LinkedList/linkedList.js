var head; // head of list

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function printList() {
  var n = head;
  while (n != null) {
    console.log(n.data);
    n = n.next;
  }
}

// adding first
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

// inserting between
function insertAfter(prev_node, new_data) {
  if (prev_node == null) {
    console.log("prev node is cannot be null");
    return;
  }
  let new_node = new Node(new_data);
  new_node.next = prev_node.next;
  prev_node.next = new_node;
}

// adding last
function append(new_data) {
  let new_node = new Node(new_data);

  if (head == null) {
    head = new Node(new_data);
    return;
  }
  new_node.next = null;
  let last = head;
  while (last.next != null) {
    last = last.next;
  }

  last.next = new_node;
  return;
}
// deletion
function deleteNode(key) {
  // Store head node
  var temp = head;
  prev = null;

  // If key was not present in linked list
  if (temp == null) return;
  
  // If head node itself holds the key to be deleted
  if (temp != null && temp.data == key) {
    head = temp.next; // Changed head
    return;
  }

  // Search for the key to be deleted, keep track of
  // the previous node as we need to change temp.next
  while (temp != null && temp.data != key) {
    prev = temp;
    temp = temp.next;
  }

  // Unlink the node from linked list
  prev.next = temp.next;
}
/* method to create a simple linked list with 3 nodes*/

/* Start with the empty list. */
// var head = new Node(1);
// var second = new Node(2);
// var third = new Node(3);

// head.next = second; // Link first node with the second node
// second.next = third; // Link second node with the third node

push(10);
insertAfter(head, null);
append(30);
append(930);
console.log("linked lisist befor delete");
printList();
// deleteNode(20)
deleteNode(930);
console.log("linked lisist after delete");
printList();
// This code contributed by safeersfr
