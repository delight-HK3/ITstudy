function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x) {
  return !x; // boolean
}

const not2 = x => !x; // boolean
var a = true;
var b = false;

console.log(add1(1,1)); // 2
console.log(add2(2,2)); // 4
console.log(add3(1,2)); // 3
console.log(add4(2,2)); // 4

console.log(not1(1)); // false
console.log(not2(!2)); // true
console.log(not1(a)); // false
console.log(not1(b)); // true

