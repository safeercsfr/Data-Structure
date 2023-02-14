let max = 5
const arr = []
let top = arr.length

function push(k){
    if (max==rear) {
        console.log('over');
    }else{
        arr[top++] = k
    }
}
function pop(){
    if (rear==front) {
        console.log('under');
    }else{
        arr[front] = undefined
        front++
    }
}
push(1)
push(2)
push(3)
push(4)
console.log(arr);