/*  We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet. */

var asteroidCollision = function(asteroids) {

    var check = function(arr){
        let flag = false;
        for(let i = 0; i< arr.length-1; i++){
            if(Math.sign(asteroids[i])=== 1 && Math.sign(asteroids[i+1])===-1){
                    flag = true;
            }

        }
      return flag;
    }
    while(check(asteroids)){
        for(let i=0; i<asteroids.length-1; i++){
            if(Math.sign(asteroids[i])=== 1 && Math.sign(asteroids[i+1])===-1){
                if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])) asteroids.splice(i+1,1);
                else if(Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])) asteroids.splice(i,1);
                else asteroids.splice(i,2);
            }
        }
    }



    return asteroids;


};

console.log(asteroidCollision([-2,1,-2,-2]))
