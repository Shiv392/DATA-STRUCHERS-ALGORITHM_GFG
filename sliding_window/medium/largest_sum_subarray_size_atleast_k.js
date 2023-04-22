// Given an array and a number k, find the largest sum of the subarray containing at least k numbers. It may be assumed that the size of array is at-least k.
// Example 1:
// Input : 
// n = 4
// arr[] = {-4, -2, 1, -3}
// k = 2
// Output : 
// -1
// Explanation :
// The sub array is {-2, 1}
 // Example 2:
// Input :
// n = 6 
// arr[] = {1, 1, 1, 1, 1, 1}
// k = 2
// Output : 
// 6
// Explanation :
// The sub array is {1, 1, 1, 1, 1, 1}
function xxx(nums,k){
    let sum=0,left=0,right=0,res=-Infinity;
    let a=0,minwin=0;
    while(right<nums.length){
        sum+=nums[right];
       if(right-left+1==k){
           res=Math.max(res,sum);
       }
       if(right-left+1>k){
           a+=nums[left];
           left++;
           minwin=Math.min(minwin,a);
           res=Math.max(res,sum-minwin);
       }
       right++;
    }
    return res;
    }
    console.log(xxx([1, 1, 1, 1, 1, 1],2))