// Given an array arr[] of integers of size N and a number X, the task is to find the sum of subarray having maximum sum less than or equal to the given value of X.
// Example 1:
// Input: N = 5, X = 11
// arr[] = {1, 2, 3, 4, 5} 
// Output:  10
// Explanation: Subarray having maximum 
// sum is {1, 2, 3, 4}.
class Solution {
    findMaxSubarraySum(arr, n, k) {
   let left=0,right=0,sum=0,res=0;
   while(right<n){
       sum+=arr[right];
       if(sum<=k){
           res=Math.max(res,sum);
           right++;
       }
       else if(sum>k){
           while(sum>k){
               sum-=arr[left];
               left++;
           }
           res=Math.max(res,sum);
           right++;
       }
   }
   return res;
    }
  }