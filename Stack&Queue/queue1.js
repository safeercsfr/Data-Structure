class Node{
    constructor(data){
        this.data= data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = this.rear = null
    }
    enqueue(data){
        let newNode = new Node(data)
        if(this.rear==null){
            this.front=this.rear=newNode
            return
        }
        this.rear.next = newNode
        this.rear=newNode
    }
    frontw(){
        if(this.front!=null && this.rear!=null){
            console.log('front',this.front.data);
            console.log('back',this.rear.data);
        }
    }
    dequeue(){
        if(this.front==null){
            this.rear=null
            console.log('empty');
            return
        }
        this.front = this.front.next

    }
    display(){
        let temp = this.front
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next
        }
    }
}
let sc = new Queue()
sc.enqueue(23)
sc.enqueue(232)
sc.enqueue(2321)
sc.dequeue()
// console.log(sc.frontw());
sc.frontw()
sc.display()