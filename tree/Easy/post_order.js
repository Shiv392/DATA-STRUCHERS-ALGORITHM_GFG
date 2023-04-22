// Given a binary tree, find the Postorder Traversal of it.
// For Example, the postorder traversal of the following tree is:
// 5 10 39 1
//         1
//      /     \
//    10     39
//   /
// 5
// Example 1:
// Input:
//         19
//      /     \
//     10      8
//   /    \
//  11    13
// Output: 11 13 10 8 19
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
    //Function to return a list containing the postorder traversal of the tree.
    postOrder(root)
    {
        let res=[];
        function dfs(root){
            if(root){
                dfs(root.left);
            dfs(root.right);
            res.push(root.data);
            }
        }
       dfs(root);
        return res;
    }
}