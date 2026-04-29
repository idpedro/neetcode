class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length
        const ans = Array({length: length * 2});
        for(let i=0;i < length;i++){
            ans[i] = ans[i + length] = nums[i]
        }
        return ans

    }
}
