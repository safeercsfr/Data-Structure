//  function change (str, key){
//     let newKey=key%26;
//     let charArray=[]
//     for (let i=0;i<str.length;i++){
//         let letterPosition=str.charAt(i).charCodeAt()+newKey
//         if(letterPosition<=122){
//             charArray[i]=String.fromCharCode(letterPosition)
//         }else{
//             charArray[i]=String.fromCharCode(96+letterPosition%122)
//         }
//     }
//     return charArray.join("")
//  }

//  let a='hai'
//  console.log(change(a,10));

 // OR

 function replaceString(str,key) {
    let charArray = str.split("");
    for(let i = 0; i < charArray.length; i++) {
        let n = charArray[i].charCodeAt() - 97;
      n = (n + key) % 26; 
      charArray[i] = String.fromCharCode(n + 97);
    }
    return charArray.join("");
  }
  
  console.log(replaceString("hai",2))

