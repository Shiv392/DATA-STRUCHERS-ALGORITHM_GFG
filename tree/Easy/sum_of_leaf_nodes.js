// Given a Binary Tree of size N. The task is to complete the function sumLeaf(), that should return the sum of all the leaf nodes of the given binary tree.
class Solution {
    SumofLeafNodes(root){
       if(!root) return ;
       let res=0;
       const dfs=(root)=>{
           if(!root) return;
           if(!root.left&& !root.right) res+=root.data;
           dfs(root.left);
           dfs(root.right);
       }
       dfs(root);
       return res;
    } 
}  