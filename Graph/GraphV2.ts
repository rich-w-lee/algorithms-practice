import { Queue } from "../StackAndQueue/Queue";
import { Stack } from "../StackAndQueue/Stack";

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

export class Graph {
  root: Node | null = null;
  nodes: Node[] = [];
  

  constructor(edges: Edge[]) {
    // Create initial nodes
   let nodeMap: Record<number, Node> = {};
    for (const edge of edges) {
      if (!nodeMap[edge.src]) {
        nodeMap[edge.src] = new Node(edge.src, []);
      }
      if (!nodeMap[edge.dest]) {
        nodeMap[edge.dest] = new Node(edge.dest, []);
      }
    }

    // Populate Children
    for (const edge of edges) {
      nodeMap[edge.src].children.push(nodeMap[edge.dest]);
    }

    this.nodes = Object.values(nodeMap);

    // Set the root to the first node
    if (this.nodes.length) this.root = this.nodes[0];
  }

  dfsPrint(root: Node): void {
    if (root === null) return;
  
    let stack = new Stack<Node>();
    const visited: boolean[] = [];

    stack.push(root);

    while (!stack.empty()) {
      const node = stack.pop()!;

      if (visited[node.value]) continue;

      visited[node.value] = true;
      console.log('Node:', node.value);

      for (const child of node.children) {
        if (!visited[child.value]) stack.push(child);
      }
    }
  }

  bfsPrint(root: Node) {
    if (root === null) return;

    let queue = new Queue<Node>();
    const visited: boolean[] = [];

    queue.add(root);

    while (!queue.empty()) {
      const node = queue.poll()!;

      visited[node.value] = true;
      console.log('Node:', node.value);

      for (const child of node.children) {
        if (!visited[child.value]) queue.add(child);
      }
    }
  }
}

export class Node {
  value: number;
  children: Node[];
  visited = false;

  constructor(value: number, children: Node[]) {
    this.value = value;
    this.children = children;
  }
}
