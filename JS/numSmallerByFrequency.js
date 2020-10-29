/* Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words. */

var numSmallerByFrequency = function(queries, words) {

    let smallest = (ar)=>{
        let ascii = []
        ar.split("").forEach((e,i)=>{
           ascii.push(e.charCodeAt(0));
        });
        let min = Math.min(...ascii)
        return String.fromCharCode(min);
    }

    let freqSmallest = (char, str)=>{
        let ar = str.split("");
        let fil = ar.filter((e)=> e === char)
        return fil.length;

    }
   let result= [];
    for(let i=0;i<queries.length;i++) result.push(0)

    queries.forEach((e,i)=>{
       words.forEach((el, idx)=>{
           let a = freqSmallest(smallest(e),e);
           let b = freqSmallest(smallest(el),el);
           if(a<b) result[i]++

       });
    });
    return result
};

console.log(numSmallerByFrequency(["a","ccbbb"],["a","aa","aaa","aaaa"]));
