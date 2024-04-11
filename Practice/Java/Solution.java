class Solution {
    public String removeKdigits(String num, int k) {
        Stack<Character> stack = new Stack<>();
        for (char digit : num.toCharArray()) {
            while (k > 0 && !stack.isEmpty() && stack.peek() > digit) {
                stack.pop();
                k--;
            }
            if (digit === '0' && stack.isEmpty()) {
                continue;
            }
            stack.push(digit);
        }

        while (k > 0 && !stack.isEmpty()) {
            stack.pop();
            k--;
        }

        if (stack.isEmpty()) {
            return "0";
        }

        StringBuilder sb = new StringBuilder();
        while (!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        sb.reverse();
        return sb.toString();
    }
}