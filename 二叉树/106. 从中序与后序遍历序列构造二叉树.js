// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。



// 示例 1:


// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
// 示例 2:

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]


// 提示:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder 和 postorder 都由 不同 的值组成
// postorder 中每一个值都在 inorder 中
// inorder 保证是树的中序遍历
// postorder 保证是树的后序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let post
    const map = new Map()
    const helper = (left, right) => {
            // 如果这里没有节点构造二叉树，就结束
            if (left > right) {
                return null
            }
            // 以post作为根节点
            const rootVal = postorder[post]
            const root = new TreeNode(rootVal)

            // 根据root所在位置切割为左右子树
            const index = map.get(rootVal)
                // 根据后序遍历--就是下一个子树的根节点
            post--
            root.right = helper(index + 1, right)

            root.left = helper(left, index - 1)
            return root
        }
        // 后序遍历
    post = postorder.length - 1
        // 简历元素，索引的键值对的哈希表
    let id = 0
    inorder.forEach((val, id) => {
        map.set(val, id)
    })
    return helper(0, inorder.length - 1)
};