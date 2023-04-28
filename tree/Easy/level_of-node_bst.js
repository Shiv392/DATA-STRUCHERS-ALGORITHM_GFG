// Given a Binary Tree and a target key you need to find the level of target key in the given Binary Tree.

// Note: The level of the root node is 1.
//            3
//          /   \
//         2     5
//       /   \
//      1     4
// Key: 4
// Level: 3  
// Note: if no such key exists then return 0.
// Example 1:
// Input:
//         1
//       /   \
//      2     3
// target = 4
// Output: 0
class Solution {
    getLevel(root,target){
    if(!root) return 0;
    let level=1,queue=[root],flag=false;
    while(queue.length){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let curr=queue.shift();
            if(curr.data == target) {
                return level;
                flag=true;
            }
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        level++;
    }
    return flag==true?level:0 ;
    }
}