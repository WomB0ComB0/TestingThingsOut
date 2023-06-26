class BST {
  value: number;
  left: BST | null;
  right: BST | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export function findClosestValueInBst(tree: BST, target: number): number {
  if(tree.value === target){
    return tree.value
  } else {
    if(target < tree.value){ // go left
      if(tree.left !== null){ // if left is not null
        let leftValue = findClosestValueInBst(tree.left!, target) // find the closest value in the left subtree
        if(tree.value - target < target - leftValue){ // if the current value is closer to the target than the left subtree value
          return tree.value
        }
        return leftValue
      }
    } else {
      if(tree.right !== null){
        let rightValue = findClosestValueInBst(tree.right!, target)
        if(target - tree.value < rightValue - target){
          return tree.value
        }
        return rightValue
      }
    }
    return tree.value;
  }
}