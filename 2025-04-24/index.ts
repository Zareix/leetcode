const countDistinctArray = (array: number[]): number => {
  return new Set(array).size;
};

function countCompleteSubarrays(nums: number[]): number {
  const arrayDistinctCount = countDistinctArray(nums);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (j - i < arrayDistinctCount) {
        continue;
      }
      if (countDistinctArray(nums.slice(i, j)) === arrayDistinctCount) {
        res++;
      }
    }
  }
  return res;
}

// SUB : Time Limit Exceeded :(
