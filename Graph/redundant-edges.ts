export function redundantEdges(edges: number[][]): number[] {
  // Stores the parent node of the edge
  const parent: number[] = [];
  
  // Init parent node to itself
  for (let i = 0; i < edges.length; i++) parent[i] = i;

  for (const edge of edges) {
    let src = edge[0];
    let dest = edge[1];

    const srcParent = findParent(src, parent);
    const destParent = findParent(dest, parent);

    // If src and dest have the same parent, then it's a cycle
    if (srcParent === destParent) return edge;
    // Otherwise, since we're connecting src and dest,
    // The parent of src is now the parent of dest
    else parent[srcParent] = destParent;
  }

  // If there are no extra edges, return an empty array
  return [];
}

function findParent(node: number, parent: number[]): number {
  // If The current node is not its parent (default scenario),
  // The parent of the node is equal to the parent of its parent
  if (node !== parent[node]) {
    parent[node] = findParent(parent[node], parent);
  }
  // Otherwise, return the parent
  return parent[node];
}

// Test
console.log(redundantEdges([[1,2],[1,3],[2,3]])); // [2,3]
console.log(redundantEdges([[1,2],[2,3],[3,4],[1,4],[1,5]])); // [1,4]
console.log(redundantEdges([[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]])); // [4,10]
