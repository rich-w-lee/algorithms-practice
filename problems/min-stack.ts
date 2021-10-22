interface StackItem {
	value: number;
	min: number;
}

class MinStack {
	data: StackItem[] = []

	push(value: number) {
		let min: number;
		if (this.data.length) {
      min = Math.min(value, this.data[this.data.length - 1].min);
    } else {
      min = value;
    }
    const item = { value, min }
    this.data.push(item)
  }

  pop(): number | null {
      if (!this.data.length) return null;
      return this.data.pop()!.value;
  }

  min() {
    if (!this.data.length) return null;
    return this.data[this.data.length - 1].min
  }
}

// Test
const stack = new MinStack();

console.log(stack.min());
stack.push(5);
console.log(stack.min());
stack.push(6);
console.log(stack.min());
stack.push(2);
console.log(stack.min());
stack.push(4);
console.log(stack.min());
