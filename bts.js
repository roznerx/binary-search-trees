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
    this.root = this.buildTree(this.arr);
  };

  buildTree(data) {
    let cleanData = [...new Set(data)].sort((a, b) => a - b);

    if (cleanData.length === 0) {
      return null;
    };
    
    // Build the tree
    let midIndex = Math.floor(cleanData.length / 2);
    let root = new Node(cleanData[midIndex]);

    // Recursion to build left and right subtrees
    root.leftChild = this.buildTree(cleanData.slice(0, midIndex));
    root.rightChild = this.buildTree(cleanData.slice(midIndex + 1));

    // The buildTree function should return the level-0 root node.
    return root;
  };

  insert(node, value) {
    // value is a number
    if (typeof value !== 'number') {
      return "Value should be a number!";
    };

    // if value already exists on tree, return
    if (this.arr.includes(value)) {
      return;
    } else {
      // if value already exists on tree, return
      if (value < node.data) {
        if (node.leftChild === null) {
          node.leftChild = new Node(value);
        } else {
          this.insert(node.leftChild, value);
        };
      } else if (value > node.data) {
        if (node.rightChild === null) {
          node.rightChild = new Node(value);
        } else {
          this.insert(node.rightChild, value);
        };
      };
    };
  };

  delete(value) {}

  // This function helps visualize the tree, provided by The Odin Project
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    };

    if (node.rightChild !== null) {
      this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    };

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.leftChild !== null) {
      this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    };
  };

};

let myTree = new Tree([1, 7, 4, 6345, 23, 8, 1, 9, 4, 32344, 3, 5, 7, 9, 67, 324]);
myTree.insert(myTree.root, 2);
myTree.prettyPrint(myTree.root);
console.log(myTree.root);
