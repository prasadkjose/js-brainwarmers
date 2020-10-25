/* Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist. */

var freqAlphabets = function(s) {
    // make hash table with alphabet keys and values
    let hash = {};
    for(let i=1;i<=26; i++){
        if(i>9) hash[String(i)] = String.fromCharCode(96+i)
        else hash[String(i)] = String.fromCharCode(96+i)
    }


    //split string
        //First split with #;

    let st = s.split("")
    let newSt = []

     for(let i=0;i<st.length; i++){
        if(st[i]==="#") {
            newSt.pop();
            newSt.pop();
            newSt.push(st[i-2]+st[i-1])
        }

         else newSt.push(st[i])

    }
    st = [];
    result = "";
    newSt.forEach((e,i)=>{
        result+=hash[e]
    })
    newSt = [];
    return result


};

console.log(freqAlphabets(""))
