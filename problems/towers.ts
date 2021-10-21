function towers(n: number, from: number[], to: number[], aux: number[]) {
	// If last element, move self
	if (n == 1) {
    const e = from.pop()!;
    to.push(e);
    return;
  }
// Move child elements
	towers(n-1, from, aux, to);

	// After moving children, move self
	const e = from.pop()!;
	to.push(e)

	// Move children on top of self
	towers(n-1, aux, to, from)
}

const s1: number[] = [1,2,3,4,5,6,7];
const s2: number[] = [];
const s3: number[] = [];

towers(7, s1, s3, s2);
console.log('s1', s1);
console.log('s2', s2);
console.log('s3', s3);
