class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let seq = 0
        let index = 0
        while(index < nums.length){
            seq = nums[index] === 1 ? seq + 1 : 0 
            max = seq >= max ? seq : max
            index++
        }
        return max

    }
}
