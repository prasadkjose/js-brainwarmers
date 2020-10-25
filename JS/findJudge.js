/* In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1. */

var findJudge = function(N, trust) {

    //make into a hashMap with
    // people : Trusted people
    let trustMap = {}

    trust.forEach((e, i)=>{
        if(e[0] in trustMap){
            trustMap[e[0]].push(e[1]);
        }
        else {
            trustMap[e[0]] = [];
            trustMap[e[0]].push(e[1]);
        }

    })



   //since town judge trust nobody then there wont be a key for the townjudge
    let keyArr = Object.keys(trustMap);

    let valArr = Object.values(trustMap);
    //if there is a key for all N values return -1
    if(keyArr.length === N) return -1

    let nArr = [];
    for(let i = 1; i<=N; i++) nArr.push(i);
    console.log(nArr, valArr)

    let judge = -1;

    for(let k of nArr){
        let flag = 0;
        for(let b of valArr ){
            if(b.includes(k)) flag++;
        }
       //console.log(flag)

        if(flag === N-1) judge = k

    }

    return judge
};

console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))
