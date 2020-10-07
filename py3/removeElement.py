class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:

        i = 0;
        while(i < len(nums)):
            if(nums[i] == val):
                print("i:",i, nums)
                nums.remove(val);
                print("new arr = ", nums)
                i = -1;
            i+=1

        return len(nums)


S = Solution();
a = [1,2,2]

print(S.removeElement(a, 1))
