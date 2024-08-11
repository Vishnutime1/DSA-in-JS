class BSTNode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearch{
    constructor(){
        this.root = null
    }
    
    insert (key){
        const NewNode = new BSTNode()
        if(this.root === null){
            this.root = NewNode
        }
        else{

        }
    }
    insertNode (node, NewNode){
        if(NewNode.key < node.key){
            if(NewNode.left === null){
                node.left = NewNode
            }
            else{
                this.insertNode(node.left, NewNode)
            }
        }else{
            if(node.right === null){
                node.right = NewNode
            }else{
                this.insertNode(node.right,NewNode)
            }
        }
    }
}





