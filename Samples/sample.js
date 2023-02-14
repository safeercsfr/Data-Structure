var top;
class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

function push(data){
    let newNode=new Node(data)
    if(top==null){
        top=newNode
    }else{
        newNode.next=top;
        top=newNode
    }
}

function display(){
}


    