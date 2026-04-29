class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length * 2
        const ans = Array({length});
        for(let i=0;i < length;i++){
            if(i >= nums.length){
                let pos = i - nums.length
                ans[i] = nums[pos]
                continue
            }
            ans[i] = nums[i]
        }
        return ans

    }
}
