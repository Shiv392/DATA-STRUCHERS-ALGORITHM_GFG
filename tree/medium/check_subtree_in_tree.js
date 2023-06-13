// Given two binary trees with head reference as T and S having at most N nodes. The task is to check if S is present as subtree in T.
// A subtree of a tree T1 is a tree T2 consisting of a node in T1 and all of its descendants in T1.
// Example 1:
// Input:
// T:      1          S:   3
//       /   \            /
//      2     3          4
//    /  \    /
//   N    N  4
// Output: 1 
// Explanation: S is present in T
class Solution {
    
    isSubTree(T, S)
    {
      if(!T && !S) return true;
      if(!T || !S) return false;
        const isSame=(t,s)=>{
            if(!t && !s) return true;
            if(!t || !s) return false;
           if(t.data!=s.data) return false;
           return isSame(t.left,s.left) && isSame(t.right,s.right);
        }
        if(isSame(T,S)){
            return true;
        }
        return this.isSubTree(T.left,S) || this.isSubTree(T.right,S);
    }
}