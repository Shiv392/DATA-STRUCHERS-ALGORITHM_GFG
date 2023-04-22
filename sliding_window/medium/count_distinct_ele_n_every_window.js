// Given an array of integers and a number K. Find the count of distinct elements in every window of size K in the array.
// Example 1:
// Input:
// N = 7, K = 4
// A[] = {1,2,1,3,4,2,3}
// Output: 3 4 4 3
class Solution {
    countDistinct(A, n, k){
        // let left=0,right=0,res=[]; brute force sliding window TLE
        // while(right<n){
        //     if(right-left+1==k){
        //       let arr=A.slice(left,right+1);
        //       res.push(new Set(arr).size);
        //       left++
        //     }
        //     right++;
        // }
        // return res;
        let res=[],map=new Map(),left=0;
        for(let right=0;right<n;right++){
            map.set(A[right],map.get(A[right])+1||1);
            if(right>=k-1){
                res.push(map.size);
                let todelete=A[left];
                if(map.get(todelete)==1) map.delete(todelete);
                else map.set(todelete,map.get(todelete)-1);
                left++;
            }
        }
        return res;
    }
}