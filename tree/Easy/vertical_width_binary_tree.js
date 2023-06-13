// Given a Binary Tree of N nodes. Find the vertical width of the tree.
// Example 1:
// Input:
//           1
//        /    \
//       2      3
//      / \    / \
//     4   5  6   7
//             \   \
//              8   9
// Output: 6// Explanation: The width of a binary tree is
// the number of vertical paths in that tree.

class Solution 
{
    //Function to find the vertical width of a Binary Tree.
    verticalWidth(root)
    {
       if(!root) return 0;
       let queue=[{node:root,hd:0}],map={};
       while(queue.length){
           let n=queue.length;
           for(let i=0;i<n;i++){
               let {node,hd}=queue.shift();
               if(!map[hd]){
                  map[hd]=[];
               }
               map[hd].push(node.data)
               if(node.left) queue.push({node:node.left,hd:hd-1});
               if(node.right) queue.push({node:node.right,hd:hd+1});
           }
           }
           return Object.keys(map).length;
    }
}