var head;
class Node {
    constructor(val){
        this.data=val
        this.next=null
        this.prev=null
    }
}
// add start element
function push(new_data){
    let new_node=new Node(new_data)
    new_node.next=head
    new_node.prev = null

    if (head!=null){
        head.prev=new_node
    }
    
    head=new_node
    
}

function display(){
    let n=head;
    while(n!=null){
        console.log(n.data);
        n=n.next
    }
}


push(10)
push(100)
push(1000)
// display(head)
display()