class Node{
    constructor(data){
        this.data=data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top=null
    }
    push(data){
        let newNode=new Node(data)

        if(this.top==null){
            this.top=newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop(){
        if(this.top==null){
            console.log('stack underflow');
            return
        }
        this.top=this.top.next

    }
    display(){
        let temp=this.top
        while(temp!=null){
            console.log(temp.data+'');
            temp=temp.next
        }
    }

}
let sc = new Stack()
sc.push(98)
sc.push(18)
sc.push(93)
sc.pop()
sc.display()