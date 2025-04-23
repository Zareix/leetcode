function countLargestGroup(n: number): number {
  const groupsBySumDigits: number[] = [];

  let largestSize = 0;
  for (let i = 1; i <= n; i++) {
    const sum = i
      .toString()
      .split('')
      .reduce((acc, val) => acc + Number.parseInt(val), 0);

    groupsBySumDigits[sum] = (groupsBySumDigits[sum] ?? 0) + 1;
    largestSize = Math.max(groupsBySumDigits[sum], largestSize);
  }

  return groupsBySumDigits.reduce(
    (acc, val) => (val === largestSize ? acc + 1 : acc),
    0
  );
}

// SUB : https://leetcode.com/problems/count-largest-group/submissions/1615751315/?envType=daily-question&envId=2025-04-23
