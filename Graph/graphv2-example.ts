import { Edge, Graph } from './GraphV2';

const edges = [
  new Edge(0, 5),
  new Edge(0, 4),
  new Edge(0, 1),
  new Edge(1, 4),
  new Edge(1, 3),
  new Edge(2, 1),
  new Edge(3, 4),
  new Edge(3, 2),
];

const graph = new Graph(edges);

graph.dfsPrint(graph.root!);

console.log('\n===\n');

graph.bfsPrint(graph.root!);
