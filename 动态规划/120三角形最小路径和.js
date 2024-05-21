// 题目描述
// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 示例 1：

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
// 示例 2：

// 输入：triangle = [[-10]]
// 输出：-10



/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 方法一：新建一个二维数据，在数据中可以对每个数进行叠加，以达到计算出所有结果
// 每在一个位置上，都有两种选择，
//     1                      1
//   2    3       转化成    3    4         
// 4   5    6            7    8    10
// 显而易见结果就是7
// 当移动到4这个数时，我只能选择上一层最左边的3相加得到（题目要求是相邻的）
// 但是当移动到5这个数时，我可以选择的是上一层计算过的3和4，相加比较她们的最小值得到8
// 当移动到6这个数时，只能跟上一层最右边相加得到10
// 最后再遍历最后一层得到和的最小值
var minimumTotal = function(triangle) {
    const len = triangle.length
    console.log(len)
        // 计算之后的数组
        // let res = []
    let res = Array.from({ length: triangle.length })
        .map(() => new Array(triangle.length).fill(0))
    res[0][0] = triangle[0][0]
    for (let i = 1; i < len; i++) {
        res.push([])
            // 最左边的数只能由上一层最左边相加得到
        res[i][0] = res[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            res[i][j] = Math.min(res[i - 1][j], res[i - 1][j - 1]) + triangle[i][j]
        }
        // 最右边只能由上一层最右边相加得到
        res[i][i] = res[i - 1][i - 1] + triangle[i][i]
    }
    // 最后一层第一个数
    let min = res[len - 1][0]
    console.log(min)
    for (let l = 1; l < len; l++) {
        if (min > res[len - 1][l]) {
            min = res[len - 1][l]
        }
    }
    console.log(min)
    return min
};
minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
])