class Stack{
    constructor(){
        this.Stack = []
    }

    push(data){

      this.Stack.push(data)
    }

    pop(){
        this.Stack.pop()
    }

    reverse(){

        return this.Stack.reverse()
    }

    peek(){
        return this.Stack[this.Stack.length -1]
    }
    find(element){
        return this.Stack.includes(element)
    }
    isEmpty(){
        return this.Stack.length === 0
    }

    printelements(){
        let str = ''
        for (let i = 0; i < this.Stack.length; i++) {
            str += this.Stack[i] + "\n";
            
        }
        return str
    }


}
let myStack = new Stack()
myStack.push(4)
myStack.push(2)
myStack.push(6)
myStack.pop()

console.log(myStack.printelements())
console.log(myStack.reverse())















