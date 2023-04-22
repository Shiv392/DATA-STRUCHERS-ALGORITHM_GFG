// Juggler Sequence is a series of integers in which the first term starts with a positive integer number a and the remaining terms are generated from the immediate previous term using the below recurrence relation:
// Juggler Formula
// Given a number N, find the Juggler Sequence for this number as the first term of the sequence.
// Example 1:
// Input: N = 9
// Output: 9 27 140 11 36 6 2 1
// Explaination: We start with 9 and use 
// above formula to get next terms.
let res=[];
function JugglerSequence(N){
 res.push(N);
 if(N==1) return res;
 if(N%2==0){
    N=~~(N**0.5);
 }
 if(N%2!=0){
    N=~~(N**1.5);
 }
 return JugglerSequence(N);
}
console.log(JugglerSequence(9))