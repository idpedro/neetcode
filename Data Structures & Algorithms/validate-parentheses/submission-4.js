class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        let openList = ["(","{","["]
        let isValid = false
        for(let i of s ){
            if(openList.includes(i)){
                stack.push(i)
                continue
            }
            let open = stack.pop()
            switch(i){
                case "}":
                    isValid = open === "{"
                break;
                case ")":
                    isValid = open === "("
                break;
                case "]":
                    isValid = open === "["
                break;
                default:
                    isValid= false
                    
            }
            if(!isValid){
                break
            }
        }

        return isValid && stack.length === 0
     

    }
}
