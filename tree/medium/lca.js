// Given a Binary Tree with all unique values and two nodes value, n1 and n2. The task is to find the lowest common ancestor of the given two nodes. We may assume that either both n1 and n2 are present in the tree or none of them are present.
// LCA: It is the first common ancestor of both the nodes n1 and n2 from bottom of tree.
// Example 1:
// Input:
// n1 = 2 , n2 = 3  
//        1 
//       / \ 
//      2   3
// Output: 1
// Explanation:
// LCA of 2 and 3 is 1.
class Solution {
    //Function to return the lowest common ancestor in a Binary Tree.
    lca(root, n1, n2)
    {
     if(!root || root.data===n1 || root.data==n2){
         return root;
     }   
     const left=this.lca(root.left,n1,n2);
     const right=this.lca(root.right,n1,n2);
     if(left && right){
         return root;
     }
     return left ? left: right;
     return root;
    }
}

