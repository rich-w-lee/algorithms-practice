import { Graph } from './SimpleGraph';

function topologicalSortCycleUtil(node: number, stack: number[], cycleStack: boolean[], visited: boolean[], graph: Graph): boolean {
  visited[node] = true;
  cycleStack[node] = true;

  for (const child of graph.nodes[node]) {
    if (!visited[child]) {
      const hasSort = topologicalSortCycleUtil(child, stack, cycleStack, visited, graph);
      if (!hasSort) return false;
    } 
    else if (cycleStack[child]) {
      return false
    }
  }
  cycleStack[node] = false;
  stack.push(node);
  return true;
}

function topologicalSortCycle(graph: Graph) {
  let stack: number[] = [];
  let visited: boolean[] = new Array(graph.size).fill(false)
  let cycleStack: boolean[] = new Array(graph.size).fill(false)

  for (let i = 0; i < graph.size; i++) {
    if (!visited[i]) {
      const hasSort = topologicalSortCycleUtil(i, stack, cycleStack, visited, graph);
      if (!hasSort) return [];
    }
  }

 return stack.reverse();
}

// Test
const graphWithCycle = new Graph(5);
graphWithCycle.addEdge(0,1);
graphWithCycle.addEdge(0,2);
graphWithCycle.addEdge(1,2);
graphWithCycle.addEdge(2,3);
graphWithCycle.addEdge(2,0);

console.log(topologicalSortCycle(graphWithCycle));

const graphWithOutCycle = new Graph(4);
graphWithOutCycle.addEdge(0,1);
graphWithOutCycle.addEdge(0,2);
graphWithOutCycle.addEdge(1,2);
graphWithOutCycle.addEdge(2,3);

console.log(topologicalSortCycle(graphWithOutCycle));
