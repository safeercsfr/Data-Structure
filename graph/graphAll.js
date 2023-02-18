class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addAdjacentVertex(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  
    removeAdjacentVertex(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
        return;
      }
  
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return;
      }
  
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeAdjacentVertex(vertex, adjacentVertex);
      }
  
      delete this.adjacencyList[vertex];
    }
  
    hasEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
        return false;
      }
  
      return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }
  
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          console.log(vertex);
  
          for (let adjacentVertex of this.adjacencyList[vertex]) {
            if (!visited.has(adjacentVertex)) {
              queue.push(adjacentVertex);
            }
          }
        }
      }
    }
  
    dfs(startVertex) {
      const visited = new Set();
      const stack = [startVertex];
    
      while (stack.length > 0) {
        const vertex = stack.pop();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          console.log(vertex);
    
          for (let adjacentVertex of this.adjacencyList[vertex]) {
            if (!visited.has(adjacentVertex)) {
              stack.push(adjacentVertex);
            }
          }
        }
      }
    }
  }
  const graph = new Graph();
  graph.addAdjacentVertex("A", "B");
  graph.addAdjacentVertex("B", "C");
  graph.addAdjacentVertex("A", "D");
  graph.addAdjacentVertex("B", "E");
  graph.addAdjacentVertex("C", "F");
  graph.bfs("A");
  console.log('--------');
  graph.dfs("A");
  
  console.log('graph.adjacencyList');
  console.log(graph.adjacencyList);
  