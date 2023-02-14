function selectionSort(arr,n){
    for(let i=0; i<n-1; i++){
        let minIndex=i
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
}
const arr=[23,5,4,3,5,6,3,2]
let n=arr.length
selectionSort(arr,n)
for(i=0;i<n;i++){
    console.log(arr[i]+"");
}