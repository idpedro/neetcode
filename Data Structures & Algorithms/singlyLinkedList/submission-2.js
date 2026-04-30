/**
 * Represents a List node.
 */
class ListNode {
    /** 
     * The name of the product.
     * @type {ListNode | null} 
     */
    next = null

   
    constructor(value = null){
        /** 
         * The name of the product.
         * @type {unknow} 
         */
        this.value = value
    }
}

class LinkedList {

    /**
     * @type  { ListNode | null}
     */
    head = null
    /**
     * @type  { ListNode | null}
     */
    tail = null
    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let walkNodes = 0
        let value = -1
        let node = this.head
        while(walkNodes <=  index && node !== null){
            if(walkNodes === index){
                value = node.value
                break
            }
            node = node.next
            walkNodes++
        }
        return value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val)
        if(this.head === null){
            this.head = node
            if(this.tail === null) this.tail = this.head
            return
        }
        node.next = this.head
        this.head = node
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new ListNode(val)
         if(this.tail === null){
            this.tail = node
            if(this.head === null) this.head = this.tail
            return
        }
        // set node as next of current tail
        this.tail.next = node
        // move tail pointer to the new node
        this.tail = this.tail.next
    }

    _remove(node,previosNode){
        const isHead = this.head === node
        const isTail = this.tail === node
        const isMiddle = !isHead && !isTail

        if(isHead && isTail){
            this.tail = null
            this.head = null
            return 
        }

        if(isMiddle){
            previosNode.next = node.next
            return 
        }
        if(isTail){
            previosNode.next = null
            this.tail = previosNode
            return 
        }
        this.head = node.next
        return 


    }
    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let walkNodes = 0
        let finded = false
        let node = this.head
        let previosNode = null
        while(walkNodes <=  index && node !== null){
            finded = walkNodes === index
            if(finded){
                this._remove(node,previosNode)
                break
            }
            previosNode = node
            node = node.next
            walkNodes++
        }
        return finded
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values = []
        let node = this.head
        while(node !== null){
            values.push(node.value)
            node = node.next
        }
        return values
    }
}
