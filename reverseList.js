function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var reverseList = function(head) {
//   let prev = null;
//   while (head) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// };

// O(n) time
// O(n) space from n stacks
// var reverseList = function(head, prev = null) {
//   if (!head) {
//     return prev;
//   }
//   let next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };

// best runtime
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  console.log(head);
  return newHead;
};

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(reverseList(a));

// public ListNode reverseList(ListNode head) {
//     if (head == null || head.next == null) return head;
//     ListNode p = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return p;
// }
