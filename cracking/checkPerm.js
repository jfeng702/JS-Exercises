function perm(str1,str2) {
  let sorted = str1.split('').sort();
  let sorted2 = str2.split('').sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
}

console.log(perm('hi', 'ih'));
console.log(perm('hi', 'ho'));
