// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。



// 示例 1：


// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 解释：等于目标和的根节点到叶节点路径如上图所示。
// 示例 2：


// 输入：root = [1,2,3], targetSum = 5
// 输出：false
// 解释：树中存在两条根节点到叶子节点的路径：
// (1 --> 2): 和为 3
// (1 --> 3): 和为 4
// 不存在 sum = 5 的根节点到叶子节点的路径。
// 示例 3：

// 输入：root = [], targetSum = 0
// 输出：false
// 解释：由于树是空的，所以不存在根节点到叶子节点的路径。


// 提示：

// 树中节点的数目在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // DFS
    let target = 0
    if (!root) return false
    if (root) target += root.val
    const dfs = (node, currentSum) => {
        if (!node) return false; // 如果节点为空，返回false

        currentSum += node.val; // 累加当前节点的值到当前路径的和上

        // 检查是否到达叶子节点，并且路径和等于目标值
        if (!node.left && !node.right) {
            return currentSum === targetSum;
        }

        // 继续递归检查左子树和右子树
        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    };

    return dfs(root, 0); // 从根节点开始DFS，初始路径和为0 // 从根节点开始DFS，初始路径和为0
};