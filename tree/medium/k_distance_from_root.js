// Given a Binary Tree of size N and an integer K. Print all nodes that are at distance k from root (root is considered at distance 0 from itself). Nodes should be printed from left to right. If k is more that height of tree, nothing should be printed.
// For example, if below is given tree and k is 2. Output should be 4 5 6.
//           1
//        /     \
//      2        3
//    /         /   \
//   4        5    6 
//      \
//       8
// Example 1:
// Input:
// K = 0
//       1
//     /   \
//    3     2
// Output: 1
class Solution {
    Kdistance(root,k){
    if(!root) return [];
let queue=[root],res=[],level=0;
        while(queue.length){
            let n=queue.length,temp=[];
            for(let i=0;i<n;i++){
                let node=queue.shift();
                 temp.push(node.data);
                if(node.left) queue.push(node.left);
                if(node.right ) queue.push(node.right);
            }
            if(level==k){
                res.push(...temp);
                break;
            }
            level++;
            
        }
        return res;
    }
}