function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);
let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

// recursive
function merge(listOne, listTwo) {
  if (!listOne) {
    return listTwo;
  }
  if (!listTwo) {
    return listOne;
  }
  if (listOne.val < listTwo.val) {
    listOne.next = merge(listOne.next, listTwo);
    return listOne;
  } else {
    listTwo.next = merge(listOne, listTwo.next);
    return listTwo;
  }

}

// function merge(listOne, listTwo) {
//   let listThree = new ListNode(null);
//   let head = listThree;
//   while (listOne || listTwo) {
//     if (listOne && !listTwo) {
//       listThree.next = listOne;
//       listOne = listOne.next;
//     } else if (listTwo && !listOne) {
//       listThree.next = listTwo;
//       listTwo = listTwo.next;
//     } else {
//       if (listOne.val < listTwo.val) {
//         listThree.next = listOne;
//         listOne = listOne.next;
//       } else {
//         listThree.next = listTwo;
//         listTwo = listTwo.next;
//       }
//     }
//     listThree = listThree.next;
//   }
//   return head.next;
// }

let result = merge(list1, list2);
console.log(result);
console.log(result.next);
console.log(result.next.next);
console.log(result.next.next.next);
