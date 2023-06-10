// Given two binary trees, the task is to find if both of them are identical or not. 
// Example 2:
// Input:
//      1          1
//    /   \      /   \
//   2     3    2     3
// Output: Yes
// Explanation: There are two trees both
// having 3 nodes and 2 edges, both trees
// are identical having the root as 1,
// left child of 1 is 2 and right child
// of 1 is 3.
class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2)
    {
       if(!root1 && !root2) return true;
       if(!root1 && root2) return false;
       if(root1 && !root2) return false;
       if(root1.data != root2.data) return false;
       else{
           return this.isIdentical(root1.left,root2.left) && this.isIdentical(root1.right,root2.right);
       }
    }
}