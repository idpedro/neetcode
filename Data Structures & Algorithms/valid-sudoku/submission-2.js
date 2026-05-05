class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         const register = new Set()
         const boxRegister = new Map()

        const createKey = (path,index,val)=>{
            return `${path}${index}${val}`
        }
        let row = 0 , col = 0
        let isValid = true
        while(row < 9 && isValid){
            const rowData = board[row]
            while(col < 9 && isValid){
                const val = rowData[col]
                if(val === ".") {
                    col++
                    continue
                }
                const boxIndex = `${Math.floor(row / 3) * 3 + Math.floor(col / 3)}`;
                const boxRegisterSet = boxRegister.get(boxIndex) ?? new Set()
                let rowKey = createKey("r",row,val)
                let colKey =  createKey("c",col,val)
                isValid = !register.has(colKey) && !register.has(rowKey) && !boxRegisterSet.has(val)
                if(!isValid) break
                register.add(colKey)
                register.add(rowKey)
                boxRegisterSet.add(val)
                boxRegister.set(boxIndex,boxRegisterSet)
                
                col++
            }
            row++
            col=0
        }
        return isValid

    }
}
