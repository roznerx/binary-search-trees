class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  };
};

class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = this.buildTree();
  };

  buildTree() {
    if (this.arr.length === 0) {
      return null;
    };
    
    // Build the tree
    let cleanArr = [...new Set(this.arr)].sort((a, b) => a - b);
    let midIndex = Math.floor(cleanArr.length / 2);
    let root = new Node(cleanArr[midIndex]);
    
    // Recursion would be nice to use

    // The buildTree function should return the level-0 root node.
    return root;
  };
};

let myTree = new Tree([1, 7, 4, 6345, 23, 8, 1, 9, 4, 32344, 3, 5, 7, 9, 67, 324]);
console.log(myTree.buildTree());
