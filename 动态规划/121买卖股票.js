// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。



// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。


/**
 * @param {number[]} prices
 * @return {number}
 */

// 超时！！！
// var maxProfit = function(prices) {
//     let dp = Array.from({ length: prices.length }).map(() => new Array(prices.length).fill(0));
//     let max = 0
//     for (let i = 1; i < prices.length; i++) {
//         for (let j = 0; j < i; j++) {
//             dp[i][j] = (prices[i] - prices[j]) > max ? (prices[i] - prices[j]) : max
//             max = (prices[i] - prices[j]) > max ? (prices[i] - prices[j]) : max

//         }
//     }
//     console.log(max)
//     return max

// };

// 一次循环不超时！！！！
// 寻找最低点
// 思路：找出最低点，然后用后面的值减去min，得出max
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            console.log(min)
        } else if ((prices[i] - min) > max) {
            // console.log(prices[i])
            max = prices[i] - min
        }
    }
    // console.log(max)
    return max

};
maxProfit([1, 2])