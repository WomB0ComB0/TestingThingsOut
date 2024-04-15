#include <vector>
#include <iostream>
#include <algorithm>
#include <climits>
#include <sstream>

using namespace std;

class Solution {
public:
    int sumNumbers(TreeNode* root)
    {
        std::vector<std::string> stack;
        return dfs(root, stack);
    }

    int dfs(TreeNode* root, std::vector<std::string>& stack) {
        if (!root) return 0;
        stack.push_back(std::to_string(root->val));
        int count = 0;
        if (!root->left && !root->right) {
            std::stringstream ss;
            for(const auto& s: stack) {
                ss << s;
            }
            count = std::stoi(ss.str());
        }
        count += dfs(root->left, stack);
        count += dfs(root->right, stack);
        stack.pop_back();
        return count;
    }
};