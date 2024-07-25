/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dom = new ListNode()
    let dommy = dom
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            dommy.next = new ListNode(list1.val)
            list1 = list1.next
        } else if (list1.val === list2.val) {
            dommy.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            dommy.next = new ListNode(list2.val)
            list2 = list2.next
        }
        dommy = dommy.next
    }
    // 如果其中一个链表为空，直接连接另一个链表的剩余部分
    dommy.next = list1 !== null ? list1 : list2;
    return dom.next
};