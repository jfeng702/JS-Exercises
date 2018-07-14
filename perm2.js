var permute = function(nums) {
    const result = [];
    function permutations(current, remaining) {
        if (!remaining.length) {
            result.push(current);
        } else {
          for (let i = 0; i < remaining.length; i++) {
              current.push(remaining[i]);
              permutations(current.slice(), remaining.slice(0,i).concat(remaining.slice(i+1)));
              current.pop();
          }
        }
    }
    permutations([], nums);
    return result;
};
