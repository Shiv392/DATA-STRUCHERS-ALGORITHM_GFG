// Given an array arr[] of n integers. Count the total number of sub-array having total distinct elements same as that of total distinct elements of the original array.
// Example 1:
// Input:
// N=5
// arr[] = {2, 1, 3, 2, 3} 
// Output: 5
countDistinctSubarray(n, arr) 
    let arrsize=new Map();
    for(let i of arr){
        arrsize.set(i,arrsize.get(i)+1||1);
    }
    let total=arrsize.size;
     let left=0,right=0,res=0;
     let map=new Map();
    for(let right=0;right<n;right++){
        map.set(arr[right],map.get(arr[right])+1||1);
        while(map.size==total){
            res+=n-right;
            map.set(arr[left],map.get(arr[left])-1);
            if(map.get(arr[left])==0) map.delete(arr[left]);
            left++;
        }
    }
    return res;
    
