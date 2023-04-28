// Given a binary tree, find the largest value in each level.
// Example 1:
// Input :
//         1
//        / \
//       2   3 
// Output : 1 3
// Explanation : 
// There are two levels in the tree :
// 1. {1}, max = 1
// 2. {2, 3}, max = 3
class Solution {
    largestValues(root){
        if(!root) return [];
        let res=[],queue=[root];
        while(queue.length){
            let len=queue.length,tempmax=-Infinity;
            for(let i=0;i<len;i++){
                let curr=queue.shift();
                // queue.pop();
                tempmax=Math.max(tempmax,curr.data);
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
            res.push(tempmax);
        }
        return res;
    }
}