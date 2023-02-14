// function findValue(str){
//     let charArray=str.split('')
//     let leng=charArray.length
//     for(let i=0;i<leng;i++){
//         let c=1
//         for(let j=1;j<leng;j++){
//             if(charArray[i]==charArray[j]){
//                 c++
//             }
//             console.log(c+charArray[i]);
//         }
//     }
// }
// console.log(findValue('aaabbc'));
function count(str) {
    let array_elements=str.split('');
    array_elements.sort();
    var current = null;
    var c = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) { 
            if (c > 0) {
                console.log( c+current )
            }
            current = array_elements[i];
            c = 1;
        } else {
            c++;
        }
    }
    if (c > 0) {
        console.log(c+current)
    }

}

console.log(count('acabab'));