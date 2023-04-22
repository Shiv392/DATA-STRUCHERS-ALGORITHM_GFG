// Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.
// Example 1:
// Input:
// 5
// 4 2 -3 1 6
// Output: 
// Yes
class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n){
    //   for(let i=0;i<n;i++){
    //       let sum=0;
    //       for(let j=i;j<n;j++){
    //           sum+=arr[j];
    //           if(sum==0) return true;
    //       }
    //   }
    //   return false;
    let sum=0,map=new Map();
    for(let i=0;i<n;i++){
        if(arr[i]==0) return true;
        else {
            sum+=arr[i];
            if(map.has(sum) || sum==0) return true;
            map.set(sum,1);
        }
    }
    return false;
    }
    
}