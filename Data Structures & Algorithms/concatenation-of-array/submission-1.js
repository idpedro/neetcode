class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length * 2
        const ans = Array({length});
        for(let i=0;i < length;i++){
            ans[i] = nums[i] | nums[i - nums.length]
        }
        return ans

    }
}
