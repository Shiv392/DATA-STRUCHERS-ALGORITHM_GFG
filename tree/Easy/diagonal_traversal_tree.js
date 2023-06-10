// Given a Binary Tree, print the diagonal traversal of the binary tree.
// Consider lines of slope -1 passing between nodes. Given a Binary Tree, print all diagonal elements in a binary tree belonging to same line.
// If the diagonal element are present in two different subtress then left subtree diagonal element should be taken first and then right subtree. 
// Example 1:
// Input :
//             8
//          /     \
//         3      10
//       /   \      \
//      1     6     14
//          /   \   /
//         4     7 13
// Output : 8 10 14 3 6 7 13 1 4
class Solution {
    diagonal(root){
        if(!root) return [];
        let res=[],queue=[root];
        while(queue.length){
            const node=queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            res.push(node.key);
            if(node.right){
                queue.unshift(node.right);
            }
        }
        return res;
        return res;
    }
}