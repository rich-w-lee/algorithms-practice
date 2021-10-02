function multiply(num1: string, num2: string): string {
    // Output of digits from step multiplication
    const productDigits = Array<number>(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        const n1 = Number(num1[i]);
        for (let j = num2.length - 1; j >= 0; j--) {
            const n2 = Number(num2[j]);
            // Local Product
            const product = n1 * n2;

            // Position for current carry-over (left digit)
            let p1 = i + j;

            // Position for current remainder (right digit)
            let p2 = i + j + 1;

            // Sum of local product + previous carry over
            let sum = product + productDigits[p2];

            // Add current carry over to next (left) digit
            productDigits[p1] += Math.floor(sum / 10);

            // Remove current carry-over from current digit
            productDigits[p2] = sum % 10;
        }
    }

    // Strip out leading 0s
    const outDigits: number[] = [];
    for (let num of productDigits) {
        if (!(outDigits.length === 0 && num === 0)) {
            outDigits.push(num);
        }
    }

    return outDigits.join('') || '0';
};

console.log(multiply('2','3'));
console.log(multiply('123', '456'));
console.log(multiply("123456789", "987654321"));
