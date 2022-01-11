export function maxSubArray(arr: number[], k: number): number {
  let maxSum = -Infinity;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    // Add current number to sum
    currSum += arr[i];

    // Check if window size is k (+1 because i starts at 0)
    if (i - start + 1 === k) {
      maxSum = Math.max(maxSum, currSum);
      currSum -= arr[start];
      start++;
    }
  }

  return maxSum;
}

function smallestSubarray(arr: number[], k: number): number {
  let minSum = Infinity;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[start];

    if ((i - start + 1) === k) {
      minSum = Math.min(currSum, minSum);
      currSum -= arr[start];
      start++;
    }
  }

  return minSum;
}


// Live Test
interface TrafficData {
  [key: string]: {
    ios: {unique: number, pageviews: number},
    android: {unique: number, pageviews: number},
  }
}
const daysAndTraffic: TrafficData = {
	'01-01-2020': {
	  'ios': { unique: 123, pageviews: 456 },
	  'android': { unique: 345, pageviews: 789 }
	},
	'01-02-2020': {
	  'ios': { unique: 1234, pageviews: 4567 },
	  'android': { unique: 3456, pageviews: 6789 }
	},
};

interface DayData { views: number, day: string};

// Step 1: Find the day that had the most and least views
// Step 2: Find the 7 days where traffic was highest

function getMostAndLeast(data: TrafficData): [DayData, DayData] {
  let most = -Infinity;
  let mostDay = '';
  let least = Infinity;
  let leastDay = '';

  const pageViews: DayData[] = [];

  for (const day in data) {
    const totalViews = data[day].ios.pageviews + data[day].android.pageviews;
    pageViews.push({
      views: totalViews,
      day,
    });
  }

  for (const e of pageViews) {
    if (e.views > most) {
      most = e.views;
      mostDay = e.day;
    }
    if (e.views < least) {
      least = e.views;
      leastDay = e.day;
    }
  }

  return [
    {
      views: most,
      day: mostDay,
    },
    {
      views: least,
      day: leastDay,
    }
  ];
}

// Returns the start day
function getSevenLargestDays(data: DayData[]): string {
  let maxSum = -Infinity;
  let maxStartDay = data[0].day;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < data.length; i++) {
    currSum += data[i].views;

    if (i - start + 1 === 7) {
      if (currSum > maxSum) {
        maxSum = currSum;
        maxStartDay = data[start].day;
      }
      currSum -= data[start].views;
      start++;
    }
  }

  return maxStartDay;
}
