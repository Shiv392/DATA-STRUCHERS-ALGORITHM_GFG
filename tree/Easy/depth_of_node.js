// Given a binary tree, find the depth of the deepest odd level leaf node in a binary tree. If there is no leaf at odd level then return 0.
// Consider that level starts with 1. Depth of a leaf node is number of nodes on the path from root to leaf (including both leaf and root).
// Example 1:
// Input: 
//           1
//         /    \
//        2      3
//       / \    / \
//      4   5  6   7
// Output: 3
// Explanation: In the above tree 4,5,6 and 7 are
// odd level leaf nodes at depth 3.So the answer is 3.
class Solution {
    depthOfOddLeaf(root) {
      if(!root) return 0;
      let level=1,res=0;
       let q=[root];
       while(q.length){
           let len=q.length;
           for(let i=0;i<len;i++){
               let node=q.shift();
               if(!node.left && !node.right){
                   if(level%2!=0 && level>res){
                       res=level;
                   }
               }
               if(node.left) q.push(node.left);
               if(node.right) q.push(node.right);
           }
           level++;
       }
       return res
    }
  }