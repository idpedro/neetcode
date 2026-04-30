class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffs = new Map()
        for(let index =0; index < nums.length; index++){
            const diff =  target - nums[index]
            if(diffs.has(diff)){
                return [diffs.get(diff),index]
            }
            diffs.set(nums[index],index)
        }

        return []
    }
}
