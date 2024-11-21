//Enum and Strong Typing
enum Direction{
    up,
    down,
    left,
    right
};
const findDirection = (direction:Direction) => {
    if(direction === Direction.up){
        console.log("Moving Up")
    }else if(direction === Direction.down){
        console.log("Moving Down")
    }else if(direction === Direction.left){
        console.log("Moving Left")
    }else if(direction === Direction.right){
        console.log("Moving Right")
    }
};
findDirection(Direction.down);

//Type Alias and Recursive Types
type TreeNode = {
    value:number,
    left?:TreeNode,
    right?:TreeNode,
};
let treeNode:TreeNode = {
    value:1,
    left:{
        value:2,
        left:{value:4},
        right:{value:5},
    },
    right:{
        value:3,
        left:{value:6},
        right:{value:7},
    },
};
let sum = 0;
const sumTree = (tree:TreeNode) => {
    const nestedFunc = (obj:TreeNode) => {
        //value is it then sum it
        if(obj.value){
            sum +=obj.value;
        }
        //if another object is exist then function run recursively
         if(obj.left){
            nestedFunc(obj.left)
        }
        //if another object is exist then function run recursively 
        if(obj.right){
            nestedFunc(obj.right)
        }
        // console.log("helo")
    }
    nestedFunc(tree);
    return sum;
};
console.log(sumTree(treeNode));