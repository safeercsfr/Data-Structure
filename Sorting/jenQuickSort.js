// [arr[start],arr[end]]=[arr[end],arr[start]]

function partition(arr, low, high) {
	let pivot = arr[low];
    let start = low
    let end = high
    
	while(start<end){
        while(arr[start]<=pivot){
            start++
        }
        while(arr[end]>pivot){
            end--
        }
        if(start<end){
           [arr[start],arr[end]]=[arr[end],arr[start]]
        }
    }
    [arr[low],arr[end]]=[arr[end],arr[low]]
    return end
}
function quickSort(arr, low, high) {
	if (low < high) {
		let loc = partition(arr, low, high);
		quickSort(arr, low, loc - 1);
		quickSort(arr, loc + 1, high);
	}
}
let arr = [7, 6, 10, 5, 9, 2,1,15,7];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr);
