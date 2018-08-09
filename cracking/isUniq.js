// str = 'hello' => false
// str = 'helo' => true
function isUniq(str) {
  let arr = str.split('').sort((a,b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return false;
    }
  }
  return true;
}


console.log(isUniq('hello'));
console.log(isUniq('helo'));
