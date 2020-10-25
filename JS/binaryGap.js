/* Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

*/

var binaryGap = function(n) {
    let bin = n.toString(2).split("");

    let maxDis = 0;

    for(let i=0; i< bin.length; i++){
        let i1 = -1;
        let i2 = -1;
        if(bin[i]==='1'){
            i1 = i;
            i2 = bin.indexOf('1',i+1);
            if(i2-i1>maxDis) maxDis = i2 - i1;
        }
    }
    return maxDis

};

console.log(binaryGap(1))
