/* Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"

Example 2:

Input: "leetcode"
Output: "leotcede"

*/

var reverseVowels = function(s) {
    let arr = s.split("");
    let hash = {
        'a':"",
        'e':"",
        'i':"",
        'o':"",
        'u':"",
        'A':"",
        'E':"",
        'I':"",
        'O':"",
        'U':""
    }

    let vowPos = [];
    let vow = []
    arr.forEach((e,i)=>{
       if(e in hash){
           vowPos.push(i);
           vow.push(e);

       }
    });
    //sort the vowPos array
    vowPos.sort((a,b)=>{return b-a});

    for(let i = 0;i<vow.length; i++){
        arr[vowPos[i]] = vow[i]
    }
    return arr.join("")

};

console.log(reverseVowels("aA"))
