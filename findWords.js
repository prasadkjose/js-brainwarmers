/*Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 *
 * Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]



Note:

    You may use one character in the keyboard more than once.
    You may assume the input string will only contain letters of alphabet.
*/

var findWords = function(words) {
    let hash = {
        "row1" : "qwertyuiop".split(""),
        "row2" : "asdfghjkl".split(""),
        "row3" : "zxcvbnm".split("")

    }
    let res = []
    words.forEach((e,i)=>{
        let size  = [0,0,0];

        e.toLowerCase().split("").forEach((l)=>{
            if(hash["row1"].indexOf(l) != -1) size[0]++;
            else if(hash["row2"].indexOf(l) != -1) size[1]++;
            else if(hash["row3"].indexOf(l) != -1) size[2]++;
            else size = [0,0,0]
        })
        console.log(e,size,e.length-1)
        size.forEach((s,idx)=>{
            if(s === e.length) res.push(e);
        })
    })

return res

};

console.log(findWords(["Dsdf","fd"]))
