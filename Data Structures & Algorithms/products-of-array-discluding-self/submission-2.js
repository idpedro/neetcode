class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let index = 0
        let results = Array.from({length:nums.length})
        let products = Array.from({length:nums.length})
        let total = 1
        let zeroCount = 0
        while(index < nums.length){
            let current = nums[index]
            if(current === 0 ){
                zeroCount++
                index++
                products[index] = total
                continue
            }
            total *= current
            products[index] = total
            index++
        }
        for(let i = 0; i < nums.length; i++){
            const currentVal =  nums[i]
            if(zeroCount > 1 || (currentVal !== 0  && zeroCount > 0)){
                results[i] = 0
                continue
            }
            if(currentVal === 0){
                results[i] = products[products.length - 1]
                continue
            }
            const max = products[products.length -1]
            const current =  products[i]
            const rest = max / current
            const prevProd = products[i - 1] ?? 1
            results[i] = rest * prevProd
        }
        
        return results

        
    }
}
