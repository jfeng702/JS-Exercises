// O(n log n)
// no space
// var isAnagram = function(s, t) {
//   return s.split('').sort().toString() === t.split('').sort().toString();
// };

// use linear time
// O(n) linear time
var isAnagram = function(s, t) {
  let hash = {};
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
    hash[t[i]] = (hash[t[i]] || 0) - 1;
  }

  for (let ch in hash) {
    if (hash[ch] !== 0) {
      return false;
    }
  }
  return true;

};
console.log(isAnagram('anagram', 'nagaram'));
