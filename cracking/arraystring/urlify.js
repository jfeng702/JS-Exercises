
function urlify(string) {

  return string.split(' ').join('%20');
}

console.log(urlify('mr john smith'));
