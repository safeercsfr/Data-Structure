class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let currentNode = this.root
        for (let letter of word) {
            if (!currentNode.children.has(letter)) {
                currentNode.children.set(letter, new Node())
            }
            currentNode = currentNode.children.get(letter)
        }
        currentNode.isEnd = true;
    }

    search(word) {
        let currentNode = this.root
        for (let letter of word) {
            if (!currentNode.children.has(letter))
                return false
            currentNode = currentNode.children.get(letter)
        }
        return currentNode.isEnd
    }

    startsWith(prefix) {
        let currentNode = this.root
        for (let letter of prefix) {
            if (!currentNode.children.has(letter))
                return false
            currentNode = currentNode.children.get(letter)
        }
        return true
    }

    autosuggest(prefix) {
        let currentNode = this.root
        for (let letter of prefix) {
            if (currentNode.children.has(letter)) {
                currentNode = currentNode.children.get(letter)
            } else {
                return []
            }
        }

        return this.traverse(currentNode, prefix)
    }

    traverse(node, prefix) {
        let results = []
        if (node.isEnd) {
            results.push(prefix)
        }
        for (let [letter, child] of node.children) {
            console.log('ll',letter);
            console.log('child',child);
            let word = prefix + letter
            results.push(...this.traverse(child, word))
        }
        return results
    }
}

const tri = new Trie()
tri.insert("safeer")
tri.insert("safu")
tri.insert("risvan")
console.log(tri.autosuggest('sa'))
