// Given an array of N elements and L and R, print the number of sub-arrays such that the value of the maximum array element in that subarray is at least L and at most R.
// Example 1:
// Input : Arr[] = {2, 0, 11, 3, 0}
// L = 1 and R = 10
// Output : 4
// Explanation:
// The sub-arrays {2}, {2, 0}, {3} and {3, 0}
// have maximum in range 1-1
let res=0;
let left=0,right=0,window=0;
while(right<arr.length){
    if(arr[right]>=l&&arr[right]<=r){
        window=right-left+1;
    }
    else if(arr[right]>r){
        window=0;
        left=right+1;
    }
    count+=window;
    right++;
}
return count;