// Given a binary tree of size N, find its reverse level order traversal. ie- the traversal must begin from the last level.
// Example 1:
// Input :
//         1
//       /   \
//      3     2
// Output: 3 2 1
// Explanation:
// Traversing level 1 : 3 2
// Traversing level 0 : 1
// Example 2:
// Input :
//        10
//       /  \
//      20   30
//     / \ 
//    40  60
// Output: 40 60 20 30 10
// Explanation:
// Traversing level 2 : 40 60
// Traversing level 1 : 20 30
// Traversing level 0 : 10


class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}


/**
 * @param {Node} root
 * @return {number[]}
*/
class Solution {
  	reverseLevelOrder(root){
  	    if(!root) return [];
  		let queue=[root];
  		let stack=[];
  		while(queue.length){
  		    let curr=queue.shift();
  		    stack.push(curr);
  		    if(curr.right) queue.push(curr.right);
  		    if(curr.left) queue.push(curr.left);
  		}
  		let res=[];
  		while(stack.length){
  	    let curr=stack.pop();
  	    res.push(curr.data);
  		}
  		return res;
  	}
}