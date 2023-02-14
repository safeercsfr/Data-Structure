let insertionSort = (arr, n) =>{
    for(let i=1; i<n; i++){
        for(let j=i; j>0; j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
            }
        }
    }
    return arr
}

let arr = [2,33,22,4,3,2,1,2]
let n = arr.length
console.log(insertionSort(arr,n));