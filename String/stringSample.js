	// let gfg = 'GeeksforGeeks';
	// let geeks = 'GfG is the best platform tolearn and\n'+
	// 			'experience Computer Science.';
	
	// // Print the string as it is
	// console.log(gfg);
	
	// console.log(geeks);
	
	// // As string index starts from zero
	// // It will return first character of string
	// console.log(gfg.charAt(0));
	
	// console.log(geeks.charAt(5));

	// let gfg = 'safeer';
	// let geeks = 'GfG is the best platform\n\
	// 			to learn and experience\n\
	// 			Computer Science.';
	
	// // Return a number indicating Unicode
	// // value of character at index 0 ('G')
	// console.log(gfg.charCodeAt(0));
	// console.log(geeks.charCodeAt(5));

	// let gfg = 'GFG ';
	// let geeks = 'stands for GeeksforGeeks';
	
	// // Accessing concat method on an object
	// // of String passing another object
	// // as a parameter
	// console.log(gfg.concat(geeks));

	// // let gfg = 'GFG ';
	// // let geeks = 'stands for GeeksforGeeks';
	
	// // Given a number as argument
	// // Output will be 'E' as 69 stands for 'E'
	// console.log(String.fromCharCode(69));
	
	// // Output will be 'a' as 97 stands for 'a'
	// console.log(String.fromCharCode(97));

	// let gfg = 'GFG';
	// let geeks = 'stands for GeeksforGeeks';
	
	// // 'GFG' is present in gfg variable
	// // returns "true"
	// console.log(gfg.includes('GFG'));
	
	// // It is case-sensitive
	// // returns "false"
	// console.log(gfg.includes('gfg'));

	// let gfg = 'GFG ';
	// let geeks = 'stands for GeeksforGeeks';
	
	// // 'G' is present at 0 index.
	// console.log(gfg.indexOf('G'));
	
	// // 'GFa' is not in gfg variable
	// // returns -1
	// console.log(gfg.indexOf('k'));
	
	// // Space is present at 3rd index
	// console.log(gfg.indexOf(' '));

    // let gfg = 'safeer ';
    // let geeks = 'stands for GeeksforGeeks';
    // let geeks1 = 'stands.for.GeeksforGeeks';
      
    // // Return 3 copies of String 
    // // present in variable gfg
    // console.log(gfg.repeat(3));
    // console.log(geeks.search("for"));
    // console.log(geeks.slice(7,10));
    // console.log(geeks1.split('.'));


    let gfg = 'GFG             ';
    let geeks = 'stands-for-GeeksforGeeks';
      
    // Storing new object of string
    // with removed white spaces
    var newGfg = gfg.trim();
      
    // Old length
    console.log(gfg.length);
      
    // New length
    console.log(newGfg.length)