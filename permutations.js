// [1,2,3]
// output: [1,2,3],[1,3,2],[2,1,3],[2,3,2],[3,1,2],[3,2,1]

const permutations = array => {
  const result = [];


  const permute = (current, remaining) => {
    if (!remaining.length) {
      result.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i]);
        permute(current.slice(), remaining.slice(0,i).concat(remaining.slice(1+i)));
        current.pop();
      }
    }
  };
  permute([], array);
  console.log(result);
};

permutations([1,2,3]);
