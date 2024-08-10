// 给你一个字符串 s，找到 s 中最长的回文子串。



// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

/**
 * @param {string} s
 * @return {string}
 */

// 整体思路，字符串可以分为从左到右，首先每一个单个字母都是一个回文字符串，
// 然后将他们看成是一个二维数据，
// 形如  例如ababa
// 索引   0     1      2     3      4
//        a     b     a     b      a
// a      T    
// b            T
// a                  T
// b                        T
// a                                T
// 这样的对角线代表的是从自己的索引到自己的索引
// 接下来我们要判断最长回文子串 只需要从左边从第二个元素开始
// 1.如果我从0-1，结果是ab，这样代表不是一个回文子串，即s[i]!==s[j]索引填入false，
// 2.但当我走到0-2时，s[i]===s[j],但是他们里面只有一个字母，显然aba是符合的，即j-i<3时，为true
// 3.当我到0-4时，此时s[i]===s[j]，但是j-i>3,我们可以参照dp[i+1][j-1]的结果是否为true，如果为true的话，那么他们也为true
// 索引   0     1      2     3      4
//        a     b     a     b      a
// a      T    
// b     1.F     T
// a     2.T     F     T
// b      F     T      F     T
// a     3.T                          T

var longestPalindrome = function(s) {
    let len = s.length
    if (len < 2) return s
        // 存放最长的回文字符串的长度和开始的索引
    let maxlen = 1,
        begin = 0

    // 设置对角线都为true，当左右索引相同时
    let dp = Array.from({ length: len }).map(() => new Array(len).fill(false))
    console.log(dp)
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }

    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            // 只要dp[i][j]为true就可以记录maxlen和begin
            if (dp[i][j] && j - i + 1 > maxlen) {
                maxlen = j - i + 1
                begin = i
            }
        }
    }
    console.log(s.slice(begin, begin + maxlen))
    return s.slice(begin, begin + maxlen)
};
longestPalindrome('ababa')