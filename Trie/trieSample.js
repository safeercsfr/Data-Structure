class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return true;
    }
  }
 
  
  const trie = new Trie();

// Test insert method
trie.insert('safeer');
trie.insert('cars');
trie.insert('bike');

// Test search method
console.log(trie.search('safeer')); 
console.log(trie.search('saleel')); 

// Test startsWith method
console.log(trie.startsWith('saf'));
console.log(trie.startsWith('sal')); 
