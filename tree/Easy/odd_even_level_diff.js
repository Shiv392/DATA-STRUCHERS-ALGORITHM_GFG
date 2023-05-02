// Given a Binary Tree. Find the difference between the sum of node values at even levels and the sum of node values at the odd levels.
// Example 1:
// Input:
//             1
//           /   \
//          2     3
// Output: -4
class Solution {
    getLevelDiff(root){
        if(!root) return 0;
        let queue=[root],level=1,oddsum=0,evensum=0;
        while(queue.length){
            let n=queue.length,sum=0;
            for(let i=0;i<n;i++){
                let node= queue.shift();
                sum+=node.data;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            level%2==0 ? oddsum+= sum : evensum+=sum;
            level++;
        }
        return evensum-oddsum;
    }
}