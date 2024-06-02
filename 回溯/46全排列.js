// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。



// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let temp = []

    function swap(nums, a, b) {
        let c = nums[a]
        nums[a] = nums[b]
        nums[b] = c
    }

    function perm(nums, k, m) {
        if (k === m) {
            res.push([...nums])
        } else {
            for (let j = k; j <= m; j++) {
                swap(nums, j, k)
                perm(nums, k + 1, m)
                swap(nums, j, k)
            }
        }
    }
    perm(nums, 0, nums.length - 1)
    console.log(res)
    return res
};
permute([1, 2, 3])