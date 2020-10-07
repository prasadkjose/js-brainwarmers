var removeElement = function(nums, val) {

    for(let i =0; i<nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i = 0;
        }
    }
    if(nums[0] === val){
        nums.splice(0,1);
    }
    return nums.length;


};
