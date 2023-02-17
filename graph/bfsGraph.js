function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
  
    visited.add(start);
  
    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);
  
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };
  
  bfs(graph, 'A');
  
  