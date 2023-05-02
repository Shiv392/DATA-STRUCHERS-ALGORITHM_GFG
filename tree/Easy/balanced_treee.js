// Given a binary tree, find if it is height balanced or not. 
// A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree. 

class Solution {
    
    //Function to check whether a binary tree is balanced or not.
    isBalanced(root)
    {
        if(!root) return true;
        const height=(root)=>{
            if(!root) return 0;
            return 1+ Math.max(height(root.left),height(root.right))
        }
        const leftHeight=height(root.left);
        const rightHeight=height(root.right);
        if(Math.abs(leftHeight-rightHeight)>1) return false;
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}