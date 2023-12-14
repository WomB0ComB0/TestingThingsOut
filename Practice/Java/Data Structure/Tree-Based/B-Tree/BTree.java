// A B tree is a tree data structure that allows us to store data that can be accessed in a hierarchical order. It is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. In this article, we will learn how to search a key on a B-tree in Java.

/**
 * B-Tree Properties
 * 
 * 1. For each node x, the keys are stored in increasing order.
 * 2. In each node, there is a boolean value x.leaf which is true if x is a leaf
 * 3. If n is the order of the tree, each internal node can contain at most n - 1 keys along with a pointer to each child.
 * 4. Each node except root can have at most n children and at least n/2 children.
 * 5. All leaves have teh same depth (i.e. height-h of the tree)/
 * 6. The root has at least 2 children and contains a minimum of 1 key.
 * 7. If n >= 1, then for any n-key B-tree of height h and minimum degree t >= , h >= logt(n + 1)/2
*/

/**
 * Operations on a B-Tree
 * 
 * Searching an element in a B-Tree
 * Searching for an element in a B-tree is the generalized form of searching an element in a Binary Search Tree.
 * 
 * 1. Starting from the root node, compare k with the first key of the node [tab] if k = the first key of the node, return the node and the index.
 * 2. If k.leaf = true, return NULL (i.e. not found)
 * 3. If k < the first key of the root node, search the left child of this key recursively.
 * 4. If there is more than one key in the current node and k > the first key, compare k with the next key in the node.
 * If k < next day, search teh left child of this key (ie. k lies in between the first and the second keys).
 * Else, search the right child of the key.
 * 5. Repeat steps 1 to 4 until the leaf is reached
*/

/**
 * BtreeSearch(x, k)
 * i = 1
 * while 1 <= n[x] and k >= keyi[x] // n[x] means number of keys in x node
 * do i = i + 1
 * if i n[x] and k = keyi[x]
 * then return (x, i)
 * if leaf[x]
 * then return NULL
 * else
 * return disk-read(ci[x])
 */

// Searching a key on a B-tree in Java

public class BTree {

  private int T;

  // Node creation
  public class Node {
    int n;
    int key[] = new int[2 * T - 1];
    Node child[] = new Node[2 * T];
    boolean leaf = true;

    public int Find(int k) {
      for (int i = 0; i < this.n; i++) {
        if (this.key[i] == k) {
          return i;
        }
      }
      return -1;
    };
  }

  public BTree(int t) {
    T = t;
    root = new Node();
    root.n = 0;
    root.leaf = true;
  }

  private Node root;

  // Search key
  private Node Search(Node x, int key) {
    int i = 0;
    if (x == null)
      return x;
    for (i = 0; i < x.n; i++) {
      if (key < x.key[i]) {
        break;
      }
      if (key == x.key[i]) {
        return x;
      }
    }
    if (x.leaf) {
      return null;
    } else {
      return Search(x.child[i], key);
    }
  }

  // Splitting the node
  private void Split(Node x, int pos, Node y) {
    Node z = new Node();
    z.leaf = y.leaf;
    z.n = T - 1;
    for (int j = 0; j < T - 1; j++) {
      z.key[j] = y.key[j + T];
    }
    if (!y.leaf) {
      for (int j = 0; j < T; j++) {
        z.child[j] = y.child[j + T];
      }
    }
    y.n = T - 1;
    for (int j = x.n; j >= pos + 1; j--) {
      x.child[j + 1] = x.child[j];
    }
    x.child[pos + 1] = z;

    for (int j = x.n - 1; j >= pos; j--) {
      x.key[j + 1] = x.key[j];
    }
    x.key[pos] = y.key[T - 1];
    x.n = x.n + 1;
  }

  // Inserting a value
  public void Insert(final int key) {
    Node r = root;
    if (r.n == 2 * T - 1) {
      Node s = new Node();
      root = s;
      s.leaf = false;
      s.n = 0;
      s.child[0] = r;
      Split(s, 0, r);
      insertValue(s, key);
    } else {
      insertValue(r, key);
    }
  }

  // Insert the node
  final private void insertValue(Node x, int k) {

    if (x.leaf) {
      int i = 0;
      for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {
        x.key[i + 1] = x.key[i];
      }
      x.key[i + 1] = k;
      x.n = x.n + 1;
    } else {
      int i = 0;
      for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {
      }
      ;
      i++;
      Node tmp = x.child[i];
      if (tmp.n == 2 * T - 1) {
        Split(x, i, tmp);
        if (k > x.key[i]) {
          i++;
        }
      }
      insertValue(x.child[i], k);
    }

  }

  public void Show() {
    Show(root);
  }

  // Display
  private void Show(Node x) {
    assert (x == null);
    for (int i = 0; i < x.n; i++) {
      System.out.print(x.key[i] + " ");
    }
    if (!x.leaf) {
      for (int i = 0; i < x.n + 1; i++) {
        Show(x.child[i]);
      }
    }
  }

  // Check if present
  public boolean Contain(int k) {
    if (this.Search(root, k) != null) {
      return true;
    } else {
      return false;
    }
  }

  public static void main(String[] args) {
    BTree b = new BTree(3);
    b.Insert(8);
    b.Insert(9);
    b.Insert(10);
    b.Insert(11);
    b.Insert(15);
    b.Insert(20);
    b.Insert(17);

    b.Show();

    if (b.Contain(12)) {
      System.out.println("\nfound");
    } else {
      System.out.println("\nnot found");
    }
    ;
  }
}