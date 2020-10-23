/* Given an integer n, return any array containing n unique integers such that they add up to 0. */

var sumZero = function(n) {
    let rnd = []
    //if Odd generate n-1/2 rand numbers, add a -ve sign and a 0
    //if even generate n/2 rand and add -ve sign

    let size = 0;
    size =  n%2!=0 ? (n-1)/2  :  n/2;
    n%2!=0 ? rnd.push(0)  : null ;



    const uniqueRand = (rnd, N)=>{
        let arr = [];
        while(rnd.length < N){
            var r = Math.floor(Math.random() * 10000) + 1;
            if(rnd.indexOf(r) === -1){
                rnd.push(r);
                rnd.push(0-r);

            }
        }
        return arr;
    }

    uniqueRand(rnd,n);


  return rnd.sort((a,b)=> {return a-b})

};

console.log(sumZero(3))
