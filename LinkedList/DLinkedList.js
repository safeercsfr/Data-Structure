let head 
let tail
class Node{
    constructor(data){
        this.data=data
        this.next = null
        this.prev=null
    }
}

function add(data){
    let newNode = new Node(data)

    if(head == null){
        head=newNode
    }else{
        tail.next=newNode
        newNode.prev=tail
    }
    tail = newNode
}


function deleteData(key){
   
}
function addAfter(prev_val,data){
    let newNode = new Node(data)
    let temp = head

    while(temp != null && temp.data!=prev_val){
        temp=temp.next
    }

    // if(temp==null) return

    if(temp==tail){
        tail.next=newNode
        newNode.prev=tail
        tail=newNode
        return
    }

    if (temp != null && temp.data==prev_val){
        newNode.next = temp.next
        temp.next=newNode
        newNode.next.prev=newNode
        newNode.prev=temp
    }else{
        console.log('sadanam ilya kutta');
        return
    }
}
function display(){
    let temp = head
    while(temp != null){
        console.log(temp.data);
        temp=temp.next
    }
}
function Rdisplay(){
    let temp = tail
    while(temp != null){
        console.log(temp.data);
        temp=temp.prev
    }
}

add(1)
add(2)
add(3)
add(4)
addAfter(null,5)
display()
console.log('reverse');
Rdisplay()



// function add(data){
//     let newNode = new Node(data)
//     let temp=head
//     if(temp==null){
//         head = newNode
//         return
//     }
//     newNode.next = head
//     head.prev = newNode
//     head = newNode
// }