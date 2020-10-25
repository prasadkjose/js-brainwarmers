/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. */

var moveZeroes = function(nums) {
    let count = 0;
    let idx = 0;

    for(let e of nums ){
       if(e != 0){
          nums[idx]  = e;
           idx++;
       }
    };
    for (; idx < nums.length; idx++) nums[idx] = 0;
};

console.log(moveZeroes([0,0,1]))
