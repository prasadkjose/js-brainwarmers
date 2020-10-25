/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.*/

var majorityElement = function(nums) {

    let hashMap = {}
    nums.forEach((e,i) =>{

        if(e in hashMap) hashMap[e]+=1
        else hashMap[e] = 1;

    });

    var result = Object.keys(hashMap).map((key) => [Number(key), hashMap[key]]);
    result.sort((a,b)=> {return b[1] - a[1]});

    return result[0][1];

};
console.log(majorityElement([2,2,1,1,1,2,2,4,4,4,4,4,4,4,4]))
