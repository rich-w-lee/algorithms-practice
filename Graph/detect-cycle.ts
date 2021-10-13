import { Graph } from './SimpleGraph';

function detectCycle(graph: Graph): boolean {
  
  let visited = new Array(graph.size).fill(false);
  let stack = new Array(graph.size).fill(false);

  for (let i = 0; i < graph.size; i++) {
    if (detectCycleUtil(i, visited, stack)) {
      return true;
    }
  }

  return false;
}

function detectCycleUtil(i: number, visited: boolean[], stack: boolean[]): boolean{
  if (stack[i]) {
    return true;
  }

  if (visited[i]) {
    return false;
  }

  visited[i] = true;
  stack[i] = true;
  const children = graph.nodes[i];

  for (const child of children) {
    if (detectCycleUtil(child, visited, stack)) {
      return true;
    }
  }

  stack[i] = false;

  return false;
}

// Test
const graph = new Graph(6);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(3,3);
graph.addEdge(2,0);

console.log(detectCycle(graph));
