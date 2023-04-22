// Given two positive integers x and y, and an array arr[] of positive integers. We need to find the longest prefix index which contains an equal number of x and y. Print the maximum index of largest prefix if exist otherwise print -1.
// Example 1:
// Input:
// N=11
// X=7  Y=42
// arr[] = [ 7, 42, 5, 6, 42, 8, 7, 5, 3, 6, 7 ]
// Output: 9
// Explanation: The longest prefix with same 
// number of occurrences of 7 and 42 is:
// 7, 42, 5, 6, 42, 8, 7, 5, 3, 6 a
function logestcommonprefinx(nums,X,Y){
    let a=0,b=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==X) a++;
        else if(nums[i]==Y) b++;
        if(a!=0 && b!=0 && a==b) return i;
    }
    return -1;
}