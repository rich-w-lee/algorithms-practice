export class GraphNode {
  value: number;
  weight: number;

  constructor(value: number, weight = 1) {
    this.value = value;
    this.weight = weight;
  }
}
