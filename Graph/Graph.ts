export class Edge {
  src: number;
  dest: number;
  weight: number;

  constructor(src: number, dest: number, weight = 1) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

export class GraphNode {
  value: number;
  weight: number;

  constructor(value: number, weight = 1) {
    this.value = value;
    this.weight = weight;
  }
}


/**
 * An implementation of an graph.
 * 
 * This implementation uses an Adjacency List.
 */
export class Graph {
  // Adjacency List
  adjList: GraphNode[][];

  constructor(edges: Edge[], directed = true) {
    this.adjList = [];

    // Create sub lists for each node
    for (let i = 0; i < edges.length; i++) {
      this.adjList[edges[i].src] = [];
      this.adjList[edges[i].dest] = [];
    }

    // Push node for src <-> dest
    for (let edge of edges) {
      this.adjList[edge.src].push(new GraphNode(edge.dest, edge.weight));
      if (directed) {
        this.adjList[edge.dest].push(new GraphNode(edge.src, edge.weight));
      }
    }
  }

  print() {
    let srcVertex = 0;
    let listSize = this.adjList.length;

    while (srcVertex < listSize) {
      for (let edge of this.adjList[srcVertex]) {
        console.log("Vertex:", srcVertex, "===>", edge.value, `(${edge.weight})`);
      }
      console.log();
      srcVertex++;
    }
  }
}

/**
 * An implementation of an graph.
 * 
 * This implementation uses an Adjacency List.
 */
export class GraphMatrix {
  // Adjacency List
  adjMatrix: number[][];

  constructor(edges: Edge[], directed = true) {

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
