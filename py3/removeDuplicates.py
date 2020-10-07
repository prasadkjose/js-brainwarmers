class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0;
        if len(nums) == 1:
            return len(nums)
        while i < len(nums):
            if nums[i] == nums[i-1]:
                nums.remove(nums[i-1]);
                i = 0;

            i+=1;
        return len(nums)


S = Solution()
a = [0,0,1]
print(S.removeDuplicates(a))

