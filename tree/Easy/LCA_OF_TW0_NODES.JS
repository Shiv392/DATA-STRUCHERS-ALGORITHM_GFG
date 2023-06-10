// Given a Binary Search Tree (with all values unique) and two node values. Find the Lowest Common Ancestors of the two nodes in the BST.
// Example 1:
// Input:
//               5
//             /   \
//           4      6
//          /        \
//         3          7
//                     \
//                      8
// n1 = 7, n2 = 8
// Output: 7
class Solution 
{
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2)
    {
        if(!root) return null;
        if(root.data < n1 && root.data <n2){
            return this.LCA(root.right,n1,n2);
        }
        if(root.data >n1 && root.data >n2){
            return this.LCA(root.left,n1,n2);
        }
        return root;
    }
}