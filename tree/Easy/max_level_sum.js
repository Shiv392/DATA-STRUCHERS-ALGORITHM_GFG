// Given a Binary Tree having positive and negative nodes. Find the maximum sum of a level in the given Binary Tree.
// Example 1:
// Input :               
//              4
//           /    \
//          2     -5
//         / \    / \
//       -1   3  -2  6
// Output: 6
class Solution {
    maxLevelSum(root){
        if(!root) return 0;
        let queue=[root],res=-Infinity;
        while(queue.length){
            let len=queue.length,sum=0;
            for(let i=0;i<len;i++){
                let node= queue.shift();
                sum+=node.data;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            res=Math.max(res,sum);
        }
        return res;
    }
}