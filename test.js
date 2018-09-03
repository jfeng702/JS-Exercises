function test() {
  console.log('sup');
  return function another() {
    console.log('hey');
    return function yetAnother() {
      console.log('hello');
    };
  };
}

test()()();
