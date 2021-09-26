function isUnique1(str: string): boolean {
	const charMap: Record<string, boolean> = {};
	for (let i = 0; i < str.length; i++) {
		if (charMap[str[i]]) {
			return false;
}
charMap[str[i]] = true;
}
return true;
}


console.assert(isUnique1('abc') === true);
console.assert(isUnique1('aba') === false);

function isUnique2(str: string): boolean {
	const sortedStr = quickSort(str);
	for (let i = 1; i < str.length - 1; i+=2) {
		const leftNeighbor = sortedStr[i - 1];
		const rightNeighbor = sortedStr[i + 1];
		if (leftNeighbor === sortedStr[i] || rightNeighbor === sortedStr[i]) {
			return false;
    }
  }
  return true;
}

function quickSort(str: string): string {
  return str.split('').sort().join('');
}

console.assert(isUnique2('abc') === true);
console.assert(isUnique2('aba') === false);
