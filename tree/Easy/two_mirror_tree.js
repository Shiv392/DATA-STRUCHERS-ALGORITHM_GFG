// Given a Two Binary Trees, write a function that returns true if one is mirror of other, else returns false.
// MirrorTree1            
// Example 1:
// Input:
// T1:     1     T2:     1
//       /   \         /   \
//      2     3       3     2
// Output: 1
// Example 2:
// Input:
// T1:     10      T2:   10
//        /  \          /  \
//       20  30        20  30
//      /  \          /  \
//     40   60       40  60
// Output: 0
class Solution {
    areMirror(root1,root2){
         if(!root1&& !root2) return true;
         if(!root1 || !root2 ||root1.data!==root2.data) return false;
         return this.areMirror(root1.left,root2.right) && this.areMirror(root1.right,root2.left);
    }
}