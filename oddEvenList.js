
  // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  let oddHead = head;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return oddHead;

};
// var oddEvenList = function(head) {
//   let i = 0;
//   let prev = head;
//   let originalHead = head;
//   let oddHead;
//   let originalOddHead;
//   while (head) {
//     if (i > 0 && i % 2 === 0) {
//       prev.next = head;
//       prev = head;
//     } else if (i === 1) {
//       oddHead = head;
//       originalOddHead = head;
//     } else if (i % 2 === 1) {
//       oddHead.next = head;
//       oddHead = head;
//     }
//     head = head.next;
//     i++;
//   }
//
//   if (prev) {
//     prev.next = originalOddHead;
//   }
//
//   if (oddHead) {
//     oddHead.next = null;
//   }
//
//   return originalHead;
// };

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
// console.log(a);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

oddEvenList(a);
let head = a;
while (head) {
  console.log(head);
  head = head.next;
}
