/* You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer. */

var arrangeCoins = function(n) {
    let a = n;
    let i = 1;
    if(n===0) return 0
    else if(n===1) return 1
    while(i<=n){
        if(Math.sign(a-i) === 1 || Math.sign(a-i) === 0){
            a = a-i;

        }
        else return i-1
        i++ ;


    }
};

console.log(arrangeCoins(5))
