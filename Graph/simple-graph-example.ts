import { Graph } from './SimpleGraph';

const graph = new Graph(6);
graph.addEdge(5,2);
graph.addEdge(5,0);
graph.addEdge(4,0);
graph.addEdge(4,1);
graph.addEdge(2,3);
graph.addEdge(3,1);

graph.dfsPrint(5);
console.log('===');
graph.bfsPrint(5);
console.log('===');
console.log(graph.topologicalSort());
