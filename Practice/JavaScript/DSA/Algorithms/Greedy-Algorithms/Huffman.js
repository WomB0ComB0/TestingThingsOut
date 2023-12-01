// Build the frequency table
function buildFrequencyTable(string) {
    let frequencyTable = {};
    for (let char of string) {
      frequencyTable[char] = frequencyTable[char] + 1 || 1;
    }
    return frequencyTable;
  }

// Build the Huffman tree

class Node {
    constructor(char, frequency) {
        this.char = char;
        this.frequency = frequency;
        this.left = null;
        this.right = null;
    }
}

function buildHuffmanTree(frequencyTable) {
    let nodes = [];
    for (let char in frequencyTable) {
        nodes.push(new Node(char, frequencyTable[char]));
    }

    while (nodes.length >  1) {
        nodes.sort((a, b) => a.frequency - b.frequency);

        let left = nodes.shift();
        let right = nodes.shift();
        let parent = new Node(null, left.frequency + right.frequency);

        parent.left = left;
        parent.right = right;
        nodes.push(parent);
    }
    return nodes[0];
}

function encode(root, string , enoocding = '') {
    if (!root) return;
    if (!root.left && !root.right) {
        console.log(`${root.char} : ${enoocding}`);
    }
    encode(root.left, string, encoding + '0');
    encode(root.right, string, encoding + '1');
}

function decode(root, encoded) {
    let current = root
    let decored = ''
    for (let bit of encoded ) {
        if  (bit  === '0') {
            current = current.left;
        } else {
            current = current.right;
        }
        if (!current.left && !current.right) {
            decored += current.char;
            current = root;
        }
    }
    return decoded
}
