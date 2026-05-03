class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        // ["...",".."] -> "_.-"
        let indexes = ''
        let encoded = ""
        let size = 0 
        let index = 0 
        while(index < strs.length ){
            size += strs[index].length
            indexes = `${indexes}:${size}`
            encoded += strs[index]
            index++
        }
        const result = `${encoded}_${indexes}`
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const getSeparatorIndex = ()=>{
            let index = str.length - 1
            while(index >= 0){
                if(str[index] === "_"){
                    break
                }
                index--
            }
            return index
        }
        const separator = getSeparatorIndex()
        const breakPointsStr = str.slice(separator+2,str.length)
        if(breakPointsStr.length === 0 ) return []
        const data = str.slice(0,separator)
        const breakPoints = breakPointsStr.split(":")
        const result = []
        let index = 0
        while(index < breakPoints.length){
            let start = breakPoints[index - 1] ?? 0 
            let end = breakPoints[index]
            result.push(str.slice(start,end))
            index++
        }
        
        return  result
    }
}
