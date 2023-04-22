// Given an array arr[] of size n, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.
// Note:- The position you return should be according to 1-based indexing. 
// Example 1:
// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2
// Explanation: 
// 5 is appearing twice and 
// its first appearence is at index 2 
// which is less than 3 whose first 
// occuring index is 3.
class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr, n) {
        // your code here
        let map=new Map();
         for(let i=0;i<arr.length;i++){
             map.set(arr[i],map.get(arr[i])+1||1);
         }
         for(let i=0;i<n;i++){
             if(map.get(arr[i])>1) {
                 return i+1;
                 break;
             }
         }
         return -1;
    }
    
}