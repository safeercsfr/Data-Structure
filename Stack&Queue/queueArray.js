let max = 5
const arr = []
let front = 0
let rear = arr.length

function Enqueue(key){
  if(max==rear){
    console.log('queue overflow');
  }else{
    arr[rear++]=key
    console.log(arr[rear-1],' added');
  }
}

function dequeue(){
  if(rear==front){
    console.log('queue underflow');
  }else{
    console.log(arr[front]," removed");
    arr[front]=undefined
    front++
  }
}

// function display(){
//   console.log('dispalay :-');
//   if(front!=rear){
//     for(let i=front;i<rear;i++){
//       console.log(arr[i]+"");
//     }
//   }else{
//     console.log([null]);
//   }
// }

Enqueue(1)
Enqueue(2)
Enqueue(3)
Enqueue(4)
Enqueue(4)
Enqueue(4)
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
display()
console.log(arr);