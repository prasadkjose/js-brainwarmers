/* Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string. */

var restoreString = function(s, indices) {
    let str = s.split("");
    let result = [];
    str.forEach((e,i)=>{
        result.push([e,indices[i]])
    });
    result.sort((a,b)=>{return a[1] - b[1]})

    let outArr = "";
    result.forEach((e,i)=>{
        outArr+=e[0];
    })
    return outArr;

};

console.log(restoreString("aiohn", [3,1,4,2,0]))
