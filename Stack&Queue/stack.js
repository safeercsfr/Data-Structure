let max = 4
const arr = []
let top = arr.length

function push(k){
    if (max==top) {
        console.log('over');
    }else{
        arr[top++] = k
    }
}
function pop(){
    if (top==0) {
        console.log('under');
    }else{
        top--
        arr.length--
    }
}
push(1)
push(2)
push(3)
push(4)
pop()
console.log(arr);