// Given a Binary Tree, find the maximum width of it. Maximum width is defined as the maximum number of nodes at any level.
// Example 1:
// Input:
//        1
//      /    \
//     2      3
// Output: 2
// On the first level there is only
// one node 1
// On the second level there are
// two nodes 2, 3 clearly it is the 
// maximum number of nodes at any level
// Example 2:
// Input:
//         10
//       /     \
//     20      30
//    /    \
//   40    60
// Output: 2
class Solution {
    // Function to get the maximum width of a binary tree.
    getMaxWidth(root) {
        if(!root) return 0;
        let res=-Infinity,queue=[root];
        while(queue.length){
            let size=queue.length;
            res=Math.max(res,size);
            for(let i=0;i<size;i++){
                let temp=queue.shift();
               
                if(temp.left) queue.push(temp.left);
                if(temp.right) queue.push(temp.right);
            }
        }
        return res==-Infinity? 0 : res;;
    }
}