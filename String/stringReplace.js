
// function removeChar(s, c)
// {
// 	let j, count = 0, n = s.length;
// 	let t = s.split("");
// 	for(let i = j = 0; i < n; i++)
// 	{
// 		if (t[i] != c)
// 			t[j++] = t[i];
// 		else
// 			count++;
// 	}
	
// 	while (count > 0)
// 	{
// 		t[j++] = '\0';
// 		count--;
// 	}
// 	console.log(t.join(""));
// }

// let s = "safeersfr";
// removeChar(s, 's');


// function replaceAlphabets(str, n) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let result = '';

//   for (const c of str) {
//     const index = alphabet.indexOf(c.toLowerCase());
//     if (index === -1) {
//       result += c;
//     } else {
//       result += alphabet[(index + n) % 26];
//     }
//   }

//   return result;
// }
// let a='hai'
// console.log(replaceAlphabets(a, 2));

function replaceAlphabets(str, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const idx = alphabet.indexOf(c.toLowerCase());
  //   console.log(idx);

    if (idx === -1) {
      result += c;
    } else {
      const offset = (idx + n) % 26;
      
      // console.log(String.fromCharCode(97+offset));
      // console.log(offset,'rrrrrrrrrr');
      result= result + c.toUpperCase() === c ? alphabet[offset].toUpperCase() : alphabet[offset];
    }
  }

  return result;
}
console.log(replaceAlphabets("abc",2))
