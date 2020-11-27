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

var mergeTwoLists = function (l1, l2) {
    let newArr = [];

    function parser(list) {
        newArr.push(list.val)
        if (list.next !== null)
            return parser(list.next)
    }
    if (l1 !== null)
        parser(l1)
    if (l2 !== null)
        parser(l2)
    let sortedArr = newArr.sort((a, b) => a - b)
    function linker(counts = 0) {
        if (counts === sortedArr.length)
            return null
        else
            obj = { "val": sortedArr[counts], "next": linker(counts + 1) }
        return obj;
    }
    let linkedList = linker();
    return linkedList
};

const l1 = { "val": 1, "next": { "val": 2, "next": { "val": 4, "next": null } } };
const l2 = { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": null } } };
console.log(mergeTwoLists(l1, l2))
console.log(JSON.stringify(l1))
const test = [-10, -6, -6, -6, -3, 5]
console.log(JSON.stringify(test.sort((a, b) => a - b)))