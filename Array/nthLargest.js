// function nthlargest(arra,highest){
//     var x = 0,
//         y = 0,
//         z = 0,
//         temp = 0,
//         tnum = arra.length, 
//         flag = false, 
//         result = false; 

//     while(x < tnum){
//         y = x + 1; 
        
//         if(y < tnum){
//             for(z = y; z < tnum; z++){
                
//                 if(arra[x] < arra[z]){
//                     // temp = arra[z];
//                     // arra[z] = arra[x];
//                     // arra[x] = temp;
//                     [arra[x],arra[z]]=[arra[z],arra[x]]
//                     flag = true; 
//                 }else{
//                     continue;
//                 }	
//             }					
//         }
        
//         if(flag){
//             flag = false;
//         }else{
//             x++; 
//             if(x === highest){ 
              
//                 result = true;
//             }	
//         }
//         if(result){
//             break;
//         }
//     }

//     return (arra[(highest - 1)]);	
// }

// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 3)); 




function NthLargest(arr,k){
    for(i=1 ; i< k; i++){
        max = Math.max(...arr)
        arr[arr.indexOf(max)] = ''
    }
    return Math.max(...arr)
}
let arr = [7112,45,56,6,-2,76,7,4,443,0]
let k = 5
console.log(NthLargest(arr,k));