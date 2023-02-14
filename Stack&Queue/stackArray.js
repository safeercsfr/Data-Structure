
class Stack {
  constructor() {
    this.items = [];
    this.max = 5
    this.top = this.items.length
  }

  push(element) {
    if (this.isFull()) {
      return "Overflow";
    }
    this.top++
    return this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    this.top--
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  isFull() {
    return this.items.length == this.max;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " -> ";
    }
    return str;
  }
}

let stack = new Stack();
console.log('pushed element = ', stack.push(10))
console.log('pushed element = ', stack.push(20))
console.log('pushed element = ', stack.push(30))
console.log('pushed element = ', stack.push(40))
console.log('pushed element = ', stack.push(50))
console.log('pushed element = ', stack.push(50))
console.log(stack.printStack());
// console.log("Popped element is " + stack.pop());
// console.log(stack.printStack());


let max = 5
const arr = []
let top = arr.length
let c=0

function push(key){
  if(max == top) {
    console.log("stack over flow");
  }else{
    arr[top++] = key
    c++
    console.log(arr[top-1]," added");
  }
} 
function pop (){
  if(top == 0){
    console.log("stack underflow");
  }else{
    console.log(arr[top-1]," deleted");
    top--
    c--
    arr.length--
  }
}
function peek(){
  console.log('top ele=',arr[top-1]);
}
function count(){
  console.log('count =',c);
}
function display(){
  console.log('Display :-');
  for(let i= 0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

push('a')
pop()
push('b')
push(3)
push(4)
push(5)
push(2)
pop()
pop()
pop()
pop()
peek()
count()
display()
// console.log(arr);

// STRING REVERSE
// let arr = [];
// let arrLength = arr.length;
// let max = 5;

// function push(val) {
//   if (arrLength > max) {
//     console.log("stack is full");
//     return;
//   }
//   arr[arrLength++] = val;
// }

// function pop() {
//     if(arrLength>0){
//         let lastRem = arr[arrLength-1];
//         arrLength--;
//         arr.length = arrLength;
//         return lastRem;
//     }else{
//         console.log('ddd');
//     }
// }
// // string reversing
// function strReverse(str) {
//   for (let i = 0; i < str.length; i++) {
//     push(str[i]);
//   }
//   for (let i = 0; i < str.length; i++) {
//     str[i] = pop();
//   }
// }

// let str = "safeerdfdfd";
// str = str.split("");
// strReverse(str);
// console.log(str.join(""));