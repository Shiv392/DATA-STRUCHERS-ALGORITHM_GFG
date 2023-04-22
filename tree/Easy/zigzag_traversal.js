// Given a Binary Tree. Find the Zig-Zag Level Order Traversal of the Binary Tree.
// Example 1:
// Input:
//         1
//       /   \
//      2     3
//     / \   /  \
//    4   5 6    7
// Output:
// 1 3 2 4 5 6 7
// Example 2:
// Input:
//            7
//         /     \
//        9       7
//      /  \     /   
//     8    8   6     
//    /  \
//   10   9 
// Output:
// 7 7 9 8 8 6 9 10 
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root)
    { 
        if(!root) return [];
        let res=[],queue=[root],level=1;
        while(queue.length){
            let len=queue.length;
            let temp=[];
            for(let i=0;i<len;i++){
                let curr=queue.shift();
                temp.push(curr);
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
                
            }
            if(level%2==0){
                res.push(...temp.reverse().map(node=> node.data));
            }
            else res.push(...temp.map(node=> node.data));
           level++;  
        } 
        return res;
    }
}