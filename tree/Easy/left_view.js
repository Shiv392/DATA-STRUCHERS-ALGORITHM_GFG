// Given a Binary Tree, return Left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from Left side. The task is to complete the function leftView(), which accepts root of the tree as argument.
// Left view of following tree is 1 2 4 8.
//           1
//        /     \
//      2        3
//    /     \    /    \
//   4     5   6    7
//    \
//      8   
// Example 1:
// Input:
//    1
//  /  \
// 3    2
// Output: 1 3
// Example 2:
// Input:
// Output: 10 20 40
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
    leftView(root)
    {
    if(!root) return [];
    let res=[],queue=[root]
    while(queue.length){
        let len=queue.length;
        for(let i=0;i<len;i++){
            let node= queue.shift();
            if(i==0){
                res.push(node.data);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return res;
    }
}