// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
// 思路：每次只能爬一个阶梯或者两个阶梯，所以当你要达到最后的路程时，分为两种情况
// 1.最后爬的为一个阶梯
// 2.最后爬的为两个阶梯
// 这样的思路可以简化为当你爬到3的阶梯为  分为 我在1阶梯时，1->3  + 2->3  即总共两种方法，再加上到1时有一种方法，到2的话有两种方法，加起来到3的话就是3种方法
// 分为f(3) = f(1)+f(2) = 3
// 函数表达式f(x) = f(x-1)+f(x+2)
var climbStairs = function(n) {
    let p = 0,q = 0,r = 1
    for(let i = 1;i<=n;i++){
        p = q
        q = r
        r = p + q
    }
    return r
};