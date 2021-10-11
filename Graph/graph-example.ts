import { Edge } from './Edge';
import { Graph, GraphMatrix } from './Graph';

const edges = [
  new Edge(0, 1, 2),
  new Edge(0, 2, 4),
  new Edge(1, 2, 4),
  new Edge(3, 2, 3),
  new Edge(4, 5, 1),
];

console.log('======Undirected Graph List======');
const undirectedGraph = new Graph(edges);
undirectedGraph.print();

console.log('======Directed Graph List======');
const directedGraph = new Graph(edges, false);
directedGraph.print();

console.log('======Undirected Graph Matrix======');
const undirectedGraph2 = new GraphMatrix(edges);
undirectedGraph2.print();

console.log('======Directed Graph Matrix======');
const directedGraph2 = new GraphMatrix(edges, false);
directedGraph2.print();
