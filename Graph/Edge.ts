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
