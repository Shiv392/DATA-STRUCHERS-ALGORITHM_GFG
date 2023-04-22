// Given a binary tree, find its preorder traversal.
// Example 1:
// Input:
//         1      
//       /          
//     4    
//   /    \   
// 4       2
// Output: 1 4 4 2 
// Example 2:
// Input:
//        6
//      /   \
//     3     2
//      \   / 
//       1 2
// Output: 6 3 1 2 2 
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    //Function to return a list containing the preorder traversal of the tree.
    preorder(root)
    {
        let res=[];
       function dfs(root){
       if(root!=null){
           res.push(root.data);
           dfs(root.left);
           dfs(root.right);
       }
       }
         dfs(root,[]);
         return res;
    }
   
}