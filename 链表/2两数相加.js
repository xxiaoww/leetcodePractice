/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = [],
        n2 = []
    while (l1) {
        n1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        n2.push(l2.val)
        l2 = l2.next
    }
    // 求和并将结果转换为字符串
    let n3 = 0
        // 哨兵节点
    let dummy = new ListNode()
    let cur = dummy
    console.log(n1, n2)
    while (n1.length || n2.length || n3 > 0) {
        let sum = n3
        if (n1.length > 0) sum += n1.shift()
        console.log(n1)
        if (n2.length > 0) sum += n2.shift()
            // console.log(n2)
            // console.log(sum)
            // 进位
        n3 = Math.floor(sum / 10)
            // 新的节点
        let node = new ListNode(sum % 10)
        cur.next = node
        cur = cur.next
    }
    return dummy.next
};