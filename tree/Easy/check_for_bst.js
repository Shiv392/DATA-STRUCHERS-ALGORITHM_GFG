// Given the root of a binary tree. Check whether it is a BST or not.
// Note: We are considering that BSTs can not contain duplicate Nodes.
// A BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
// Input:
//    2
//  /    \
// 1      3
// Output: 1 
// 
class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root)
    {  
        if(root==null) return true;
        let prev=null;
        const dfs=(root)=>{
            if(!root) return true;
            if(!dfs(root.left)) return false;
            if(prev!=null && prev.data>=root.data){
                return false;
            }
            prev=root;
            return dfs(root.right);
        }
        return dfs(root);
       
    }
}