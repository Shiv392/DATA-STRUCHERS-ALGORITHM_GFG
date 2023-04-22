// An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
// Given an array arr[] of size N, Return the index of any one of its peak elements.
// Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. 
// Example 1:
// Input: 
// N = 3
// arr[] = {1,2,3}
// Possible Answer: 2
// Generated Output: 1
// Explanation: index 2 is 3.
// It is the peak element as it is 
// greater than its neighbour 2.
// If 2 is returned then the generated output will be 1 else 0
class Solution {
    
    peakElement(arr, n)
    {
        // code here
        // return arr.indexOf(Math.max(...arr)); brute foece
        //binary search
        let left=0,right=n-1;
        while(left<right){
            let mid=~~((left+right)/2);
            if(arr[mid]>arr[mid+1]){
                right=mid;
            }
            else{
                left=mid+1;
            }
        }
        return left;
    }
}