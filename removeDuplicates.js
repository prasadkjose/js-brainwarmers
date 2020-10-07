var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1
    for(let i = 0; i< nums.length; i++)
    {

        if(nums[i] === nums[i-1] ){
            nums.splice(i,1);
            i = 0;
        }

}

    return nums.length
};
