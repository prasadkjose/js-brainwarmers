/*Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".*/

var buddyStrings = function(A, B) {
    let arr1 = A.split("");
    let arr2 = B.split("");
    let count = 0;
    let index = []
    if(arr1.length != arr2.length) return false

    // compare each letter and if there are 2 diff and swappable
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]) index.push(i);
    }

    if(index.length>2) return false
    else if(index.length === 2){
        let tmp = arr1[index[0]];
        arr1[index[0]] = arr1[index[1]];
        arr1[index[1]] = tmp;
        let flag = true
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] != arr2[i]) flag = false;
        }
        if(flag) return true
        else return false
    }
    else if(index.length === 0){
        //check for multiple char occurance
            for(var i = 0; i <= arr1.length; i++) {
                for(var j = i+1; j <= arr1.length; j++) {
                    if(arr1[j] == arr1[i]) {
                        return true; }
                }
            }
            return false;
    }

    else{
        return false
    }
};

console.log(buddyStrings("abcaa", "abcbb"))


