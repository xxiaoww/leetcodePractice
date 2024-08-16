    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    var buildTree = function(preorder, inorder) {
        let post = 0
        let map = new Map()
        const helper = (left, right) => {
            if (left > right) return null
            const rootVal = preorder[post]
            const root = new TreeNode(rootVal)
            post++
            const index = map.get(rootVal)
            root.left = helper(left, index - 1)
            root.right = helper(index + 1, right)
            return root
        }
        let id = 0
        inorder.forEach((val, id) => {
            map.set(val, id)
        })
        return helper(0, preorder.length - 1)
    };