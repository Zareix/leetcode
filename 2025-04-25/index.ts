const isInterestingArray = (
  nums: number[],
  start: number,
  end: number,
  modulo: number,
  k: number
): boolean => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (nums[i] % modulo === k) {
      count++;
    }
  }
  return count % modulo === k;
};

function countInterestingSubarrays(
  nums: number[],
  modulo: number,
  k: number
): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (isInterestingArray(nums, i, j, modulo, k)) {
        res++;
      }
    }
  }
  return res;
}

// SUB : Time Limit Exceeded :(
