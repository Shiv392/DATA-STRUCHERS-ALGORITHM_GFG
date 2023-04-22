// Given an array containing N integers and an integer K., Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.
// Example 1:
// Input :
// A[] = {10, 5, 2, 7, 1, 9}
// K = 15
// Output : 4
// Explanation:
// The sub-array is {5, 2, 7, 1}.
class Solution{
    lenOfLongSubarr(arr,n, k){
       let res=0,map=new Map(),sum=0;
       for(let i=0;i<arr.length;i++){
           sum+=arr[i];
           let diff=sum-k;
           if(sum==k){
               res=i+1;
           }
           else if(map.has(diff)){
               res=Math.max(res,i-map.get(diff));
           }
           if(!map.has(sum)){
               map.set(sum,i);
           }
       }
       return res;
    }
}