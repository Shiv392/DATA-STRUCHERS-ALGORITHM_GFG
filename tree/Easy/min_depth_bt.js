// Given a binary tree, find its minimum depth.
// Example 1:
// Input:
//             1
//           /   \
//          3     2
//         /
//        4           
// Output: 2
class Solution {
    minDepth(root){
        if(!root) return 0;
        let queue=[[root,1]];
        while(queue.length){
            let [node,depth]=queue.shift();
            if(!node.left && !node.right){
                return depth;
            }
            if(node.left){
                queue.push([node.left,depth+1]);
            }
            if(node.right){
                queue.push([node.right,depth+1]);
            }
            
        }
        return 0;
    }
}