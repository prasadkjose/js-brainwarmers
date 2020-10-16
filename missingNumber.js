var missingNumber = function(nums) {
    let len = nums.length+1;
    let intersection = [...Array(len).keys()].filter(x => !nums.includes(x));
    return intersection[0];
};
