class DequeNode{
    prev = null
    next = null
    val = null
    constructor(val){
        this.val = val
    }
}
class MyDeque {
    head = null
    tail = null
    constructor() {}

    /**
     * @return {boolean}
     */
    isEmpty() {
       return this.head === null 
    }

    /**
     * @param {number} value
     */
    append(value) {
        // [] <-
        const newNode = new DequeNode(value)
        if(!this.tail){
            this.tail = newNode
            this.head = this.tail
            return 
        }
        this.tail.next = newNode
        newNode.prev = this.tail 
        this.tail = newNode
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new DequeNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            return 
        }
        this.head.prev = newNode
        newNode.next = this.head 
        this.head = newNode
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.tail === null ) {
            return -1
        }
        const val = this.tail.val
        if(this.tail === this.head){
            this.head = null
        }
        this.tail = this.tail.prev // if dont exist gonna bee null
        if(this.tail)  this.tail.next = null
        return  val
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.head === null ) {     
            return -1
        }
        const val = this.head.val
        if(this.head === this.tail){
            this.tail = null
        }
        this.head = this.head.next // if dont exist gonna bee null
        if(this.head){
            this.head.prev = null
        }
        return  val
    }
}
// -> []
