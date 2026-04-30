class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const repetition = new Set()
        for(let i = 0; i <= nums.length;i++){
            if(repetition.has(nums[i])){
                return true
            }
            repetition.add(nums[i])
        }
        return false
    }
}
