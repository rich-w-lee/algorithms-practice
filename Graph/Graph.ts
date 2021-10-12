import { Stack } from '../StackAndQueue/Stack';
import { Queue } from '../StackAndQueue/Queue';

export class Edge<T> {
  src: T;
  dest: T;
  weight: number;

  constructor(src: T, dest: T, weight = 1) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

export class GraphNode<T> {
  value: T;
  weight: number;

  constructor(value: T, weight = 1) {
    this.value = value;
    this.weight = weight;
  }
}

/**
 * An implementation of an graph.
 * 
 * This implementation uses an Adjacency List. The node values
 * will be able to be any Primitive data type (string, etc),
 * but will be tracked using indexes. The index will be correlated
 * with when the node was first seen when creating the graph from
 * the edges list. 
 */
export class Graph<T> {
  // Adjacency List
  adjList: GraphNode<T>[][] = [];
  
  /**
   * A map to store the corresponding index in the
   * adjacency list for a given node's value.
   */
  private indexMap: Map<T, number> = new Map();

  root: GraphNode<T> | null = null;

  constructor(edges: Edge<T>[], directed = false) {
    // Add each node to indexMap and init index in adjacency list
    // Also init index in adjacency list
    let nodeCount = 0;
    for (const edge of edges) {
      if (!this.indexMap.has(edge.src)) {
        const index = nodeCount++;
        this.indexMap.set(edge.src, index);
        this.adjList[index] = [];
      }
      if (!this.indexMap.has(edge.dest)) {
        const index = nodeCount++;
        this.indexMap.set(edge.dest, index);
        this.adjList[index] = [];
      }

      // Push graph node to adjacency list
      const srcNode = new GraphNode(edge.src, edge.weight);
      const destNode = new GraphNode(edge.dest, edge.weight);

      this.adjList[this.indexMap.get(edge.src)!].push(destNode);
      if (!directed) {
        this.adjList[this.indexMap.get(edge.dest)!].push(srcNode);
      }

      // Set root to first node
      if (nodeCount === 2) {
        this.root = srcNode;
      }
    }
  }

  dfsPrint(root: GraphNode<T> | null) {
    if (!root) return;

    let stack = new Stack<GraphNode<T>>();
    let visited: Record<number, boolean> = {};

    stack.push(root);

    while (!stack.empty()) {
      const node = stack.pop()!;
      const nodeIndex = this.indexMap.get(node.value)!;
      
      if (visited[nodeIndex]) continue

      visited[nodeIndex] = true;

      console.log('Node: ', node.value);

      for (const child of this.adjList[nodeIndex]) {
        if (!visited[this.indexMap.get(child.value)!]) {
          stack.push(child);
        }
      }
    }
  }

  bfsPrint(root: GraphNode<T> | null) {
    if (!root) return;

    let queue = new Queue<GraphNode<T>>();
    let visited: Record<number, boolean> = {};

    queue.add(root);

    while (!queue.empty()) {
      const node = queue.poll()!;
      const nodeIndex = this.indexMap.get(node.value)!;

      if (visited[nodeIndex]) continue;

      visited[nodeIndex] = true;
      console.log('Node: ', node.value);

      for (const child of this.adjList[nodeIndex]) {
        if (!visited[this.indexMap.get(child.value)!]) queue.add(child);
      }
    }
  }
}

/**
 * An implementation of an graph.
 * 
 * This implementation uses an Adjacency List.
 */
export class GraphMatrix{
  // Adjacency List
  adjMatrix: number[][];

  constructor(edges: Edge<number>[], directed = true) {

    // Create sub lists for each node
    let maxNode = 0;
    for (let i = 0; i < edges.length; i++) {
      maxNode = Math.max(maxNode, edges[i].src, edges[i].dest);
    }

    this.adjMatrix = [];
    for (let i = 0; i < maxNode + 1; i++) {
      this.adjMatrix[i] = new Array(maxNode + 1).fill(0);
    }

    // Push node for src <-> dest
    for (let edge of edges) {
      this.adjMatrix[edge.src][edge.dest] = edge.weight;
      if (directed) {
        this.adjMatrix[edge.dest][edge.src] = edge.weight;
      }
    }
  }

  print() {
    for (let i = 0; i < this.adjMatrix.length; i++) {
      for (let j = 0; j < this.adjMatrix[i].length; j++) {
        const edge = this.adjMatrix[i][j];
        if (edge) {
          console.log("Vertex:", i, "===>", j, `(${edge})`);
        }
      }
      console.log();
    }
  }
}
