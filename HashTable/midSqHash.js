class hashTable{
    constructor(size){
      this.size = size
      this.table = new Array(size)
    }
  
    // hashing(key){
    //   let tot=0;
    //   for(let i=0 ;i<key.length;i++){
    //     tot+=key.charCodeAt(i)
    //   }
    //   return tot %this.size
    // }
    hashing(key) {
      const numDigits = Math.floor(Math.log10(key)) + 1;
      const middle = Math.floor(numDigits / 2);
      const squared = key ** 2;
      return parseInt(squared.toString().slice(middle, middle + 1));
    }
    // hashing(key){
    //   return key %this.size
    // }
  
    add(key,val){
      let index = this.hashing(key)
      this.table[index] = val
    }
  
    get(key){
      let index = this.hashing(key)
      console.log("finded value=",this.table[index]);
    }
  
    remove(key){
      let index = this.hashing(key)
      this.table[index] = undefined
    }
  
    display(){
      for(let i=0 ;i<this.table.length;i++){
        console.log(i,'====',this.table[i]);
      }
    }
  }
  
  let a = new hashTable(100)
  // a.add('abc','safeer')
  a.add(60,'safr')
  // a.get(2)
  // a.remove(2)
  // a.remove(1)
  a.display()
  // console.log(a.hashing(10));
  