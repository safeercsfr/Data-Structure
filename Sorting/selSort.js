let selectionSort = (a,n) =>{
    for(let i=0; i<n; i++){
        let minIndex = i
        for(let j=i+1; j<n; j++){
            if(a[j]<a[minIndex]){
                minIndex=j
            }
        }
        [a[minIndex],a[i]]=[a[i],a[minIndex]]
    }
    return a
}

let a = [21,3,22,11,444,21,3,2,41]
let n = a.length
console.log(selectionSort(a,n));