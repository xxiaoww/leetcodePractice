// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。



// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true


// 提示：

// 1 <= ransomNote.length, magazine.length <= 105

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 如果ransomNote长度大于magazine长度，肯定无法构造，返回false
    if (ransomNote.length > magazine.length) return false
        // 初始化一个长度为26的数组，每个元素初始值为0，用来计数magazine中每个字符的出现次数
    const cnt = new Array(26).fill(0)
        // 遍历magazine中的每个字符，更新计数数组
    for (const c of magazine) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]++

    }
    // 遍历ransomNote中的每个字符，检查是否有足够的字符来构造ransomNote
    for (const c of ransomNote) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]--
            // 如果计数数组中的某个字符数量少于0，表示magazine中的该字符数量不足，返回false
            if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
                return false
            }
    }
    return true

};