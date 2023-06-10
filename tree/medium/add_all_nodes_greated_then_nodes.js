// Given a BST, modify it so that all greater values in the given BST are added to every node.
// Example 1:
// Input:
//            50
//          /    \
//         30    70
//       /   \   / \  
//      20   40 60  80
// Output: 350 330 300 260 210 150 80
// Explanation:The tree should be modified to
// following:
//              260
//           /       \
//         330      150
//        /   \   /     \
//     350   300 210    80
class Solution {
    modify(root){
        if(!root) return null;
        let temp=0;
        const dfs=(root)=>{
            if(!root) return 0;
            dfs(root.right);
            temp+=root.data;
            root.data=temp;
            dfs(root.left);
        }
        dfs(root);
        return root;
    }
}