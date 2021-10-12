import { Edge, Graph, GraphMatrix } from './Graph';

const edges = [
  new Edge(0, 1, 2),
  new Edge(0, 2, 4),
  new Edge(0, 4, 4),
  new Edge(1, 2, 4),
  new Edge(3, 2, 3),
  new Edge(4, 5, 1),
];

const edges2 = [
  new Edge('richard', 'laura'),
  new Edge('richard', 'matthew'),
  new Edge('laura', 'tori'),
  new Edge('tori', 'martin'),
  new Edge('laura', 'georgia'),
  new Edge('georgia', 'phillip'),
];

// console.log('======Undirected Graph List======');
// const undirectedGraph = new Graph(edges);
// undirectedGraph.dfsPrint(undirectedGraph.root);

console.log('======Undirected Graph List DFS======');
const undirectedGraph2 = new Graph(edges2);
undirectedGraph2.dfsPrint(undirectedGraph2.root);
console.log('======Undirected Graph List BFS======');
undirectedGraph2.bfsPrint(undirectedGraph2.root);

// console.log('======Directed Graph List======');
// const directedGraph = new Graph(edges, true);
// directedGraph.dfsPrint(directedGraph.root);

// console.log('======Undirected Graph Matrix======');
// const undirectedGraphM = new GraphMatrix(edges);
// undirectedGraphM.print();

// console.log('======Directed Graph Matrix======');
// const directedGraphM = new GraphMatrix(edges, true);
// directedGraphM.print();
