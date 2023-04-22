// Given an integer array arr of size N and an integer k, return the number of good subarrays of arr.
// A good array is an array where the number of different integers in that is exactly k.
// For example, {1, 3, 4, 4, 1} has 3 different integers: 1, 3, and 4.
// Note : A subarray is a contiguous part of an array.
// Example 1:
// Input:
// N = 5
// k = 2
// arr[ ] = {1, 2, 1, 2, 3}
// Output: 7
function subarraysWithKDistinct(arr, k) {
    let n = arr.length;
    let count = 0;
    let freq = new Array(n+1).fill(0);
    let left = 0, right = 0, distinct = 0;
  
    while (right < n) {
      // Expand the window to the right
      if (freq[arr[right]] === 0) {
        distinct++;
      }
      freq[arr[right]]++;
      right++;
  
      // Shrink the window from the left
      while (distinct > k) {
        freq[arr[left]]--;
        if (freq[arr[left]] === 0) {
          distinct--;
        }
        left++;
      }
  
      // Update count if window size is K
      if (distinct === k) {
        count++;
        // Continue shrinking window to count all subarrays
        while (freq[arr[left]] > 1) {
          freq[arr[left]]--;
          left++;
          count++;
        }
      }
    }
  
    return count;
  }
  