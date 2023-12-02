class Node {
  constructor() {
    this.parent = null; // Assign data
    this.child = null; // Initialize next as null
    this.left = null;
    this.right = null;
    this.key = -1;
  }
}

// Creating min pointer as "mini"
let mini = new Node();

// Declare an integer for number of nodes in the heap
let no_of_nodes = 0;

// Function to insert a node in heap
function insertion(val) {
  let new_node = new Node();
  new_node.key = val;
  new_node.parent = null;
  new_node.child = null;
  new_node.left = new_node;
  new_node.right = new_node;

  if (mini.key != -1) {
    mini.left.right = new_node;
    new_node.right = mini;
    new_node.left = mini.left;
    mini.left = new_node;
    if (new_node.key < mini.key) {
      mini = new_node;
    }
  } else {
    mini = new_node;
  }
}

// Function to display the heap
function display(mini) {
  let ptr = mini;
  if (ptr === null) {
    console.log("The Heap is Empty");
  } else {
    console.log("The root nodes of Heap are: ");
    console.log(ptr.key.toString());
    ptr = ptr.right;
    if (ptr !== mini) {
      console.log("-->");
    }


    while (ptr !== mini && ptr.right !== null) {
      console.log(ptr.key.toString());
      ptr = ptr.right;
      if (ptr !== mini) {
        console.log("-->");
      }
    }
    console.log(`The heap has ${no_of_nodes} nodes`);
  }
}

// Function to find min node in the heap
function find_min(mini) {
  console.log(`min of heap is: ${mini.key}`);
}

// Driver code
no_of_nodes = 7;
insertion(4);
insertion(3);
insertion(7);
insertion(5);
insertion(2);
insertion(1);
insertion(10);

display(mini);

find_min(mini);
