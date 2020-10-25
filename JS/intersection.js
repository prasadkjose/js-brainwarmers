/* Given two arrays, write a function to compute their intersection.
 *
 * Note:

    Each element in the result must be unique.
    The result can be in any order.
*/

var intersection = function(nums1, nums2) {

    let intersection = nums1.filter(e=> nums2.includes(e));
    return intersection.filter((e,i,s) => s.indexOf(e) === i)
};

console.log(intersection([4,9,5], [9,4,9,8,4]))
