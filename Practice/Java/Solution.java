import java.*;

class Solution {
    public int sumNumbers(TreeNode root) {
        Stack<String> stack = new Stack<>();
        return dfs(root, stack);
    }

    public int dfs(TreeNode root, Stack<String> stack) {
        if (root == null) {
            return 0;
        }

        stack.push(String.valueOf(root.val));
        if (root.left == null && root.right == null) {
            int sum = 0;
            for (String s : stack) {
                sum = sum * 10 + Integer.parseInt(s);
            }
            stack.pop();
            return sum;
        }
        int left = dfs(root.left, stack);
        int right = dfs(root.right, stack);
        stack.pop();
        return left + right;
    }
}