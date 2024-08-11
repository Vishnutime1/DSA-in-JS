class BSTNode{
    constructor(key){
        this.key = key
        this.right = null
        this.left = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }
    delete(key){
        this.root = this.deleteNode(this.root,key)
    }
    deleteNode(node,key){
        if(node === null){
            return null
        }
        if(node.key < key){
            node.left = this.deleteNode(node.left,key)
        }
        else if(node.key > key){
            node.right = this.deleteNode(node.right,key)
        }
        else{
            if(node.right === null && node.left === null){
                return null
            }
            else if(node.right === null){
                return node.left
            }
           else if(node.left === null){
                return node.right
            }
            else{
               let tempNode = this.findMind(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right,tempNode.key)
            }
        }
    }
}
