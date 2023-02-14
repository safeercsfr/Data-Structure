// circular queue

let max = 5;
let arr = [];
let rear = -1;
let front = -1;

function enqueue(val) {
  if (rear == -1 && front == -1) {
    front = 0;
    rear = 0;
    arr[rear] = val;
  } else if ((rear + 1) % max == front) {
    console.log("overflow");
  } else {
    rear = (rear + 1) % max;
    arr[rear] = val;
  }
}

function dequeue() {
  if (rear == -1 && front == -1) {
    console.log("underflow");
  } else if (rear == front) {
    front = rear = -1;
  } else {
    arr[front]=null
    front = (front + 1) % max;
  }
}

// function display() {
//   console.log("dispalay :-");
//   let s = "";
//   for (let i = front; i <= rear; i++) {
//     s += arr[i] + " ->> ";
//   }
//   console.log(s);
// }

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
dequeue();
dequeue();
enqueue(835);
enqueue(85);
console.log(arr);
// display();
