export class SortedStack {
  trueStack: number[] = [];
  utilStack: number[] = [];

  push(value: number) {
    if (this.trueStack.length === 0 || value < this.trueStack[this.trueStack.length - 1]) {
      this.trueStack.push(value);
      return;
    }
    while (this.trueStack.length !== 0) {
      if (value > this.trueStack[this.trueStack.length - 1]) {
        this.utilStack.push(this.trueStack.pop()!)
        if (this.trueStack.length === 0) {
          this.trueStack.push(value);
          break;
        }
      } else {
        this.trueStack.push(value);
        break;
      }
    }
    while (this.utilStack.length !== 0) {
      this.trueStack.push(this.utilStack.pop()!);
    }
  }
}

// Test
let sortedStack: SortedStack;
sortedStack = new SortedStack();
[1,2,3,4,5].forEach((e) => {
  sortedStack.push(e)
})
console.log(sortedStack.trueStack);

sortedStack = new SortedStack();
[5,4,3,2,1].forEach((e) => {
  sortedStack.push(e)
})
console.log(sortedStack.trueStack);

sortedStack = new SortedStack();
[1,5,2,6,3].forEach((e) => {
  sortedStack.push(e)
})
console.log(sortedStack.trueStack);
