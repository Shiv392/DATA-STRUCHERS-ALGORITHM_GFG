// Given a Binary Tree, find Right view of it. Right view of a Binary Tree is set of nodes visible when tree is viewed from right side.
// Right view of following tree is 1 3 7 8.
//           1
//        /     \
//      2        3
//    /   \      /    \
//   4     5   6    7
//     \
//      8
// Example 1:
// Input:
//        1
//     /    \
//    3      2
// Output: 1 2
// Example 2:
// Input:
//      10
//     /   \
//   20     30
//  /   \
// 40  60 
// Output: 10 30 60
/**
 * @param {Node} root
 * @returns {number[]}
*/

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
    
    rightView(root)
    {
        if(!root) return [];
        let res=[],queue=[root];
        while(queue.length){
            let len=queue.length;
            let rightnode= null;
            for(let i=0;i<len;i++){
                let node= queue.shift();
                rightnode=node;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            res.push(rightnode.data);
        }
        return res;
    }
}