// Given a binary tree, connect the nodes that are at same level. You'll be given an addition nextRight pointer for the same.
// Initially, all the nextRight pointers point to garbage values. Your function should set these pointers to point next right for each node.
//        10                       10 ------> NULL
//       / \                       /      \
//      3   5       =>     3 ------> 5 --------> NULL
//     / \     \               /  \           \
//    4   1   2          4 --> 1 -----> 2 -------> NULL
// Example 1:
// Input:
//      3
//    /  \
//   1    2
// Output:
// 3 1 2
// 1 3 2
class Solution 
{
    //Function to connect nodes at same level.
    connect(p)
    {
        if(!p) return null;
        let queue=[p];
        while(queue.length){
            let n=queue.length;
            for(let i=0;i<n;i++){
                let node=queue.shift();
                if(i<n-1){
                    node.nextRight=queue[0];
                }
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        return p;
    }
}