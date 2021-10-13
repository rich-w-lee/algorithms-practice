import { Queue } from "../StackAndQueue/Queue";
import { Stack } from "../StackAndQueue/Stack";

export class Graph {
  root: number | null = null;
  nodes: number[][];
  size: number;
  

  constructor(size: number) {
    this.size = size;
    this.nodes = new Array(size);
    for (let i = 0; i < size; i++) {
      this.nodes[i] = [];
    }
  }

  addEdge(src: number, dest: number) {
    this.nodes[src].push(dest);
  }

  dfsPrint(root: number): void {
    if (this.size === 0) return;
  
    let stack = new Stack<number>();
    const visited: boolean[] = [];

    stack.push(root);

    while (!stack.empty()) {
      const node = stack.pop()!;

      if (visited[node]) continue;

      visited[node] = true;
      console.log('Node:', node);

      for (const child of this.nodes[node]) {
        if (!visited[child]) stack.push(child);
      }
    }
  }

  bfsPrint(root: number) {
    if (this.size === 0) return;

    let queue = new Queue<number>();
    const visited: boolean[] = [];

    queue.add(root);

    while (!queue.empty()) {
      const node = queue.poll()!;

      visited[node] = true;
      console.log('Node:', node);

      for (const child of this.nodes[node]) {
        if (!visited[child]) queue.add(child);
      }
    }
  }

  private topologicalSortUtil(node: number, stack: number[], visited: boolean[]) {
    visited[node] = true;

    for (const child of this.nodes[node]) {
      if (!visited[child])
        this.topologicalSortUtil(child, stack, visited);
    }
    stack.push(node);
  }

  topologicalSort() {
    let stack: number[] = [];
    let visited: boolean[] = new Array(this.size).fill(false)

    for (let i = 0; i < this.size; i++) {
      if (!visited[i])
        this.topologicalSortUtil(i, stack, visited);
    }

   return stack.reverse();
  }
}
