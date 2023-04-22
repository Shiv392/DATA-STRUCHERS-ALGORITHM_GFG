// Given an integer array Arr of size N. For each element in the array, check whether the right adjacent element (on the next immediate position) of the array is smaller. If next element is smaller, update the current index to that element. If not, then  -1.
// Example 1:
// Input:
// N = 5
// Arr[] = {4, 2, 1, 5, 3}
// Output:
// 2 1 -1 3 -1
class Solution {
    immediateSmaller(arr,n){
       for(let i=0;i<arr.length;i++){
           if(arr[i]>arr[i+1]){
               arr[i]=arr[i+1];
           }
           else arr[i]=-1;
       }
       arr[n-1]=-1;
       return arr
    }
}