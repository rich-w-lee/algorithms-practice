/** 
 * This function will find the largest contiguous subarray
 * that contains only 2 unique values.
 * 
 * For flavor, each value in the array is a fruit.
 * We have 2 baskets, and only one fruit can go into each basket.
 * We can only "start" picking fruit once. So once we stop, we cannot restart.
 * We need to find the section of the list that would give us the most fruit.
 * 
 * Time Complexity: O(n)
 */
function totalFruit(fruits: number[]): number {
    // Most recent basket
    let f1;
    let f1ConsecutiveCount = 0;

    // Oldest fruit in basket
    let f2;
    
    // Current total fruit in basket
    let tFruit = 0;

    // Max basket total
    let maxFruit = 0;

    for (let fruit of fruits) {
      // Fruit most recent in basket
      if (fruit === f1) {
        tFruit++;
        f1ConsecutiveCount++;
      }
      // Fruit oldest in basket
      if (fruit === f2) {
        tFruit++;

        // Flip f1, f2, reset f1ConsecutiveCount
        f2 = f1;
        f1 = fruit;
        f1ConsecutiveCount = 1; 
      }
      // Fruit not in basket
      if (fruit !== f1) {
        // Calc new total
        tFruit = f1ConsecutiveCount + 1;

        // Move f1 to f2, set new fruit to f1
        // reset f1 counter
        f2 = f1;
        f1 = fruit;
        f1ConsecutiveCount = 1; 
      }

      maxFruit = Math.max(maxFruit, tFruit);
    }
    return maxFruit;
};

// Test
console.log(totalFruit([1,2,1])); // 3 - [1,2,1]
console.log(totalFruit([0,1,2,2])); // 3 - [1,2,2]
console.log(totalFruit([1,2,3,2,2])); // 4 - [2,3,2,2]
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])); // 5 - [1,2,1,1,2]
