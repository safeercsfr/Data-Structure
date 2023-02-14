var head;
class Node{
    constructor(val){
        this.data=val;
        this.next=null
    }
}
function insert(new_data){
    let new_node = new Node(new_data)
    new_node.next=head
    head=new_node
}
function add(prev_node,new_data){
    let new_node = new Node(new_data)
    if(prev_node==null){
        return
    }
    new_node.next = prev_node.next
    prev_node.next=new_node
}
function display(){
    let n=head
    while(n!=null){
        console.log(n.data);
        n=n.next
    }
}
insert(40)
insert(30)
insert(20)
insert(10)
console.log("before added");
display()
console.log("after added value");
add(head,100)
display()
