// Find the first non-repeating element in a given array arr of N integers.
// Note: Array consists of only positive and negative integers and not zero.
// Example 1:
// Input : arr[] = {-1, 2, -1, 3, 2}
// Output : 3
// Explanation:
// -1 and 2 are repeating whereas 3 is 
// the only number occuring once.
// Hence, the output is 3. 
class Solution{
    firstNonRepeating(arr,n){
        //code here
        let map=new Map();
        for(let i of arr){
            map.set(i,map.get(i)+1||1);
        }
        for(let i of arr){
            if(map.get(i)==1){
                return i;
                break;
            }
        }
        return 0;
    }
}