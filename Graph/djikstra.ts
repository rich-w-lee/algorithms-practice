import { Graph, GraphNode, Edge } from './Graph';

export function dijkstra<T>(graph: Graph<T>, root: T) {
  let sptSet = new Set<T>();
  
  // Populate distances
  // Start at infinity for non-root nodes, 0 for root
  let distances = new Map<T, number>()
  graph.indexMap.forEach((v,k) => {
    distances.set(k, Infinity);
  })
  distances.set(root, 0);

  while (sptSet.size !== graph.indexMap.size) {
    const nextNode = getNextNode(sptSet, distances);
    if (nextNode === null) break;

    sptSet.add(nextNode);

    // Update distance values for neighbors
    const nodeIndex = graph.indexMap.get(nextNode)!;
    const neighbors = graph.adjList[nodeIndex];

    neighbors.forEach((n) => {
      if (n.value === root) return;

      const pathWeight = distances.get(nextNode)! + n.weight;
      const currDistance = distances.get(n.value)!;

      if (!sptSet.has(n.value) && currDistance === Infinity) {
        distances.set(n.value, pathWeight);
      } 
      else if (!sptSet.has(n.value) && pathWeight < currDistance) {
        distances.set(n.value, pathWeight);
      }
    });
  }
  return distances;
}

/**
 * Returns the min node of the distances
 */
function getNextNode<T>(
  set: Set<T>,
  distances: Map<T, number>,
): T | null {
  let minNode: T | null = null;
  let minValue: number | null = null;

  distances.forEach((value, key) => {
    if (!set.has(key)) {
      if (minValue === null) {
        minValue = value;
        minNode = key;
      } else {
        if (value < minValue) {
          minValue = value;
          minNode = key;
        }
      }
    }
  })

  return minNode;
}

// Test
const edges = [
  new Edge('richard', 'laura'),
  new Edge('richard', 'matthew'),
  new Edge('laura', 'tori'),
  new Edge('tori', 'martin'),
  new Edge('laura', 'georgia'),
  new Edge('georgia', 'phillip'),
];
const graph = new Graph(edges);

console.log(dijkstra(graph, graph.root!));

const edges2 = [
  new Edge(0,1,4),
  new Edge(0,7,8),
  new Edge(1,2,8),
  new Edge(1,7,11),
  new Edge(2,3,7),
  new Edge(2,8,2),
  new Edge(2,5,4),
  new Edge(7,8,7),
  new Edge(7,6,1),
  new Edge(6,8,6),
  new Edge(6,5,2),
  new Edge(5,3,14),
  new Edge(3,4,9),
  new Edge(5,4,10),
];
const graph2 = new Graph(edges2);

console.log(dijkstra(graph2, graph2.root!));
