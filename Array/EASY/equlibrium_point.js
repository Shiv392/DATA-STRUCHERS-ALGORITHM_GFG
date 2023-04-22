// Given an array A of n positive numbers. The task is to find the first Equilibrium Point in an array. 
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
// Note: Retun the index of Equilibrium point. (1-based index)
// Example 1:
// Input: 
// n = 5 
// A[] = {1,3,5,2,2} 
// Output: 3 
// Explanation:  
// equilibrium point is at position 3 
// as elements before it (1+3) = 
// elements after it (2+2). 
class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
       let sum=0,leftsum=0;
       for(let i of a) {
           sum+=i;
       }
       for(let i=0;i<a.length;i++){
          sum-=a[i];
          if(sum==leftsum) {
              return i+1;
          }
          leftsum+=a[i]
       }
       return -1;
    }
}