class queue{
constructor(){
    this.queue = []
}

equeue(data){
    this.queue.push(data)

}
dqueue(){
    if(this.isEmpty()){
        return "Queue is empty"
    }
     this.queue.shift()
}

isEmpty(){
    return this.queue.length == 0
}

peek(){
    return this.queue[0]
}
printqueue(){
    let str = "" 
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] +"\n"
            
        }
        return str
    }
}

let My_Queue = new queue()

My_Queue.equeue(20)
My_Queue.equeue(30)
My_Queue.dqueue()
console.log(My_Queue.printqueue())
My_Queue.dqueue()
console.log(My_Queue.dqueue())

