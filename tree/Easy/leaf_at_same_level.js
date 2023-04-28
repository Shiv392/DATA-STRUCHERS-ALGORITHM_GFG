// Given a Binary Tree, check if all leaves are at same level or not.
// Example 1:
// Input: 
//             1
//           /   \
//          2     3
// Output: 1
// Explanation: 
// Leaves 2 and 3 are at same level.
// Example 2:
// Input:
//             10
//           /    \
//         20      30
//        /  \        
//      10    15
// Output: 0
class Solution {
    check(root){
        let set=new Set();
        function checkIf(root,height){
            if(!root.left && !root.right){
               set.add(height);
                return;
            }
            if(root.left) checkIf(root.left,height+1);
            if(root.right) checkIf(root.right,height+1);
        }
     if(!root) return true;
     checkIf(root,0);
     return set.size==1;
    }
}