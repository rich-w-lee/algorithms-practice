export function powerSet(nums: number[]): number[][] {
	return powerSetUtil(nums, nums.length);
}

function powerSetUtil(nums: number[], n: number): number[][] {
	if (n === 0) return [[]];
	const subsets = powerSetUtil(nums, n-1);
	const pset: number[][] = [];
	// N time for size of subset
	for (const subset of subsets) {
		pset.push(subset);
	}
	// N time for size of subset
	for (const subset of subsets) {
		pset.push(subset.concat(n));
	}
	return pset;
}

// Test
console.log(powerSet([1,2,3,4]));
