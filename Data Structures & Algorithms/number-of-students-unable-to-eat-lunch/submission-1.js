class MyQueueNode{
    next = null
    prev = null
    val = null
    constructor(val){
        this.val = val
    }
}
class MyQueue {
    current = null
    tail = null 
    enqueue(val){
        const newnode = new MyQueueNode(val)
        if(this.current === null ){
            this.current = newnode
        }
        if(this.tail === null){
            this.tail = newnode
        }
        if(this.current === this.tail ) return 
        this.tail.next = newnode
        newnode.prev = this.tail
        this.tail = newnode  
    }
    dequeue(){
        const current = this.current
        if(this.current) return null 
        this.current = this.current.next
        if(this.current?.prev){
            this.current.prev = null
        }
        return current.val
    }
}
class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const queue = new Queue()
        for(let student of students){
            queue.enqueue(student)
        }

        let index = 0 
        let retry = students.length
        while(index < sandwiches.length){
            if(retry <= 0) break
            let currentSandwinche = sandwiches[index]
            let currentStudent = queue.dequeue()
            if(currentSandwinche !== currentStudent){
                queue.enqueue(currentStudent)
                retry--
                continue
            }
            retry = students.length - index  
            index++
        }
        return students.length - index  
    }
}
