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
function listNode(val,  next= null){
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2){
    let dummy = new listNode(0);
    let current = dummy;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0){
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        let sum = x + y + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new listNode(digit);
        current = current.next;

        l1 = l1 ? l1.next : null  
        l2 = l2 ? l2.next : null

        
    }
    return dummy.next;
}

let l1 = new listNode(2, new listNode(4, new listNode(3)));
let l2 = new listNode(5, new listNode(6, new listNode(4)));

let result = addTwoNumbers(l1, l2);

let current = result;
let output = [];
while(current !== null){
    output.push(current.val);
    current = current.next;
}
console.log(output);