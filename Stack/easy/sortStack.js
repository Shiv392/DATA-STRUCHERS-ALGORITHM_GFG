// Given a stack, the task is to sort it such that the top of the stack has the greatest element.
// Example 1:
// Input:
// Stack: 3 2 1
// Output: 3 2 1
class Stack {
    constructor(){
      this.stack = [];
    }
  }
  */
  
  
  /* The below method sorts the stack s 
  you are required to complete the below method */
  Stack.prototype.sort = function() {
    //code here
    return this.stack.sort((a,b)=>b-a)
  };