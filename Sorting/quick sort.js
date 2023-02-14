function quickSort(arr){
    if(arr.length < 1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    const result = [...quickSort(left), pivot, ...quickSort(right)]
    return result
}

const arr = [4, 9, 2, 3, 6, 8,  1]
console.log(quickSort(arr));