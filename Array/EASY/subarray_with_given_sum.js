// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.
// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.
// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.
// Example 1:
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.
class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
       //normal sliding window
       if(s==0) return [-1]
       let sum=arr[0],left=0,right=0;
       while(left<n&&right<n){
           if(sum<s){
               //increse window size
               sum+=arr[++right];
           }
           else if(sum>s){
               sum-=arr[left++]
           }
           else if(left<=right){
               return [left+1,right+1];
           }
       }
       return [-1]
    }
}