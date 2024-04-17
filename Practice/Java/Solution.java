import java.*;

// class Solution {
//     public int sumNumbers(TreeNode root) {
//         Stack<String> stack = new Stack<>();
//         return dfs(root, stack);
//     }

//     public int dfs(TreeNode root, Stack<String> stack) {
//         if (root == null) {
//             return 0;
//         }

//         stack.push(String.valueOf(root.val));
//         if (root.left == null && root.right == null) {
//             int sum = 0;
//             for (String s : stack) {
//                 sum = sum * 10 + Integer.parseInt(s);
//             }
//             stack.pop();
//             return sum;
//         }
//         int left = dfs(root.left, stack);
//         int right = dfs(root.right, stack);
//         stack.pop();
//         return left + right;
//     }
// }

class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }
        dfs(root, val, depth, 1);
        return root;
    }
    public void dfs(TreeNode root, int val, int depth, int curDepth) {
        if (root == null) {
            return;
        }
        if (curDepth == depth - 1) {
            TreeNode left = new TreeNode(val);
            TreeNode right = new TreeNode(val);
            left.left = root.left;
            right.right = root.right;
            root.left = left;
            root.right = right;
            return;
        }
        dfs(root.left, val, depth, curDepth + 1);
        dfs(root.right, val, depth, curDepth + 1);
    }
}

class Heap {
    private List<String> list;
    public Heap() {
        list = new ArrayList<>();
    }
    public void add(String s) {
        list.add(s);
        int index = list.size() - 1;
        while (index > 0) {
            int parent = (index - 1) / 2;
            if (list.get(index).compareTo(list.get(parent)) < 0) {
                String temp = list.get(index);
                list.set(index, list.get(parent));
                list.set(parent, temp);
                index = parent;
            } else {
                break;
            }
        }
    }
    public String peek() {
        return list.get(0);
    }
}

class Solution {
    public String smallestFromLeaf(TreeNode root) {
        String[] res = new String[1];
        res[0] = "~";
        dfs(root, new ArrayList<>(), res);
        return res[0];
    }
    public void dfs(TreeNode root, List<Character> list, String[] res) {
        if (root == null) {
            return;
        }
        list.add((char) (root.val + 'a'));
        if (root.left == null && root.right == null) {
            StringBuilder sb = new StringBuilder();
            for (int i = list.size() - 1; i >= 0; i--) {
                sb.append(list.get(i));
            }
            String s = sb.toString();
            if (s.compareTo(res[0]) < 0) {
                res[0] = s;
            }
        }
        dfs(root.left, list, res);
        dfs(root.right, list, res);
        list.remove(list.size() - 1);
    }
}

/**
 * class Solution:
 * def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
 * res = '~'
 * def sol(node, s=[]):
 * nonlocal res
 * if not node: return
 * s.append(chr(node.val+ord('a')))
 * if not node.left and not node.right:
 * res = min(res, ''.join(s[::-1]))
 * sol(node.left, s)
 * sol(node.right, s)
 * s.pop()
 * sol(root)
 * return res
 */ 