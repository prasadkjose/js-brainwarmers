/*Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again). */

const maxProfit = function(prices) {
    let w = 1;
    let len = prices.length;

    let winProfit = {};
    //console.log(prices)
while(w<len){
    winProfit[w] = [];
    for(let l= 0 , r = l+w; l<len; l++, r= l+w){
        let t= (prices[r] - prices[l]);
        if(Math.sign(t) === 1 || t === 0){
            //console.log(l,r)
            let o = {}
            o[t] = [l,r]
            winProfit[w].push(o[t])
        }
   }
    w++;
}


    //deconstruct into array of arrays
    let arrProf = [];
    for(let k in winProfit ){
        arrProf.push(winProfit[k])
    }


    let x = []

    for(let a=0; a < arrProf.length; a++){
        for(let b =0; b< arrProf[a].length; b++){
            x.push(arrProf[a][b])
        }
    }

    let sorted = x.sort((a,b)=>{
        return a[0] - b[0];
    })

    let profit = 0;
    let MaxProfit = 0;

    //for 1 transaction

    for(let i=0; i< sorted.length; i++){
        if( prices[sorted[i][1]] - prices[sorted[i][0]] > profit)
           // console.log(sorted[i], prices[sorted[i][1]] - prices[sorted[i][0]])

            profit = prices[sorted[i][1]] - prices[sorted[i][0]];
    }
    //for 2 transactions

    for(let i=0; i< sorted.length; i++){
        for(let j=0; j< sorted.length; j++) {
            let s1 = prices[sorted[i][1]] - prices[sorted[i][0]];
            let s2 = prices[sorted[j][1]] -  prices[sorted[j][0]];

            if(sorted[i][0] < sorted[j][0] &&  sorted[j][0] > sorted[i][1] && s1 + s2 > profit) {
                //console.log(sorted[i], sorted[j], s1, s2)
                profit = s1+s2;
            }
        }
    }



   return profit

};

console.log(maxProfit([2,1,4]))

/* but this solution has a lot of redundancy and time complexity */

/* Optimized solution */

var maxProfit = function(A) {
    let b1 = Number.MAX_SAFE_INTEGER;   // awful first buy price
    let b2 = Number.MIN_SAFE_INTEGER;   // awful second buy profit
    let s1 = 0;                         // awful first sell profit
    let s2 = 0;                         // awful second sell profit
    for (let a of A) {
        b1 = Math.min(b1, a);           // min first buy price
        s1 = Math.max(s1, a - b1);      // max first sell profit
        b2 = Math.max(b2, s1 - a);      // max second buy profit
        s2 = Math.max(s2, b2 + a);      // max second sell profit
    }
    return s2;
}

var maxProfit = function(A) {
        let b1 = Number.MAX_SAFE_INTEGER;   // awful first buy price
        let b2 = Number.MIN_SAFE_INTEGER;   // awful second buy profit
        let s1 = 0;                         // awful first sell profit
        let s2 = 0;                         // awful second sell profit
        for (let a of A) {
                    b1 = Math.min(b1, a);           // min first buy price
                    s1 = Math.max(s1, a - b1);      // max first sell profit
                    b2 = Math.max(b2, s1 - a);      // max second buy profit
                    s2 = Math.max(s2, b2 + a);      // max second sell profit
                }
        return s2;
};;
