// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex > array.length ?
//         {done: true} :
//         {value: array[nextIndex++], done: false};
//     }
//   };
// }
//
// const test = makeIterator([1,2,3,4]);
// console.log(test.next().value);
// console.log(test.next().value);
// console.log(test.next().value);
// console.log(test.next().value);
// console.log(test.next().done);
// console.log(test.next().done);

function* idMaker() {
  var index = 0;
  while (true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
