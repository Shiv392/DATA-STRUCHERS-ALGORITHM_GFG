// Complete the function to find spiral order traversal of a tree. For below tree, function should return 1, 2, 3, 4, 5, 6, 7.
// Example 1:
// Input:
//       1
//     /   \
//    3     2
// Output:1 3 2
// Example 2:
// Input:
//            10
//          /     \
//         20     30
//       /    \
//     40     60
// Output: 10 20 30 60 40 
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
    //Function to return a list containing the level order 
	//traversal in spiral form.	
    findSpiral(root)
    {
        if(!root) return []
       let res=[],level=1,queue=[root];
       while(queue.length){
           let len=queue.length;
           let temp=[];
           for(let i=0;i<len;i++){
               let node=queue.shift();
               temp.push(node.data);
               if(node.left) queue.push(node.left);
               if(node.right) queue.push(node.right);
           }
           if(level%2==0) res.push(...temp);
           if(level%2!=0) res.push(...temp.reverse());
           level++;
       }
       return res;
    }
}