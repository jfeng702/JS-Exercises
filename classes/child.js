const Parent = require('./parent');

class Child extends Parent {
  constructor() {
    super();
  }

  push(val) {
    this.arr.push(val);
  }

  show() {
    console.log(this.arr);
  }
}

let child = new Child;
child.push(3);
child.push(5);
child.show();
