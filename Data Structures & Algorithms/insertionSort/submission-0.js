/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        // array to register the swap states 
        const states = []
        for(let i = 1; i <= pairs.length; i++){
            let j = i - 1 // 0
            states.push(Array.from(pairs))
            while (j >= 0 && pairs[j+1]?.key < pairs[j]?.key){
                // j + 1 is lower then j 
                let tmp = pairs[j + 1]
                // swap the values positions
                pairs[j + 1] = pairs[j]
                pairs[j] = tmp
                // decrement j
                // cause we need verify if the value ( now is j+1)  
                // is lower then previus values
                j-=1
            }
        }
        return states
    }
}
