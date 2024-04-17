#include <vector>
#include <iostream>
#include <algorithm>
#include <climits>
#include <sstream>

using namespace std;

// class Solution {
// public:
//     int sumNumbers(TreeNode* root)
//     {
//         std::vector<std::string> stack;
//         return dfs(root, stack);
//     }

//     int dfs(TreeNode* root, std::vector<std::string>& stack) {
//         if (!root) return 0;
//         stack.push_back(std::to_string(root->val));
//         int count = 0;
//         if (!root->left && !root->right) {
//             std::stringstream ss;
//             for(const auto& s: stack) {
//                 ss << s;
//             }
//             count = std::stoi(ss.str());
//         }
//         count += dfs(root->left, stack);
//         count += dfs(root->right, stack);
//         stack.pop_back();
//         return count;
//     }
// };

class Solution {
    public:
        TreeNode* addOneRow(TreeNode* root, int val, int depth) {
            if (depth == 1) return new TreeNode(val, root, nullptr);
            vector<TreeNode*> layer { root };
            for (int i = 2; i < depth; i++) {
                vector<TreeNode*> nextLayer;
                for (TreeNode* node: layer) {
                    if (node->left) nextLayer.push_back(node->left);
                    if (node->right) nextLayer.push_back(node->right);
                }
                swap(layer, nextLayer);
            }
            for (TreeNode* node: layer) {
                node->left = new TreeNode(val, node->left, nullptr);
                node->right = new TreeNode(val, nullptr, node->right);
            }
            return root;
        }
};

class Solution
{
public:
    string smallestFromLeaf(TreeNode *root)
    {
        string res = "";
        dfs(root, "", res);
        return res;
    }
    void dfs(TreeNode *root, string path, string &res)
    {
        if (!root)
            return;
        path = char('a' + root->val) + path;
        if (!root->left && !root->right)
        {
            if (res == "")
                res = path;
            else
                res = min(res, path);
        }
        dfs(root->left, path, res);
        dfs(root->right, path, res);
    }
};