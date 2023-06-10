// Given a Binary tree. Find the level in binary tree which has the maximum number of nodes.
// Example 1:
// Input://       2
//     /    \ 
//    1      3
//  /   \     \
// 4    6      8
//      / 
//     5
// Output: 2
// Explanation: The level 2 with nodes 4,
// 6 and 8 is the level with maximum
// number of nodes. 
class Solution {
    maxNodeLevel(root){
        if(!root) return 0;
        let queue=[root],res=0,count=0,level=0;
        while(queue.length){
            let n=queue.length;
            if(count<n){
                count=n;
                res=level;
            }
            for(let i=0;i<n;i++){
                let node= queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            level++;
        }
        return res;
    }
}