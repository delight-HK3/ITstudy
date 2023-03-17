var es = 'ES';

// 안에서 해도 되고 밖에서 선언도 가능하다.
var sayNode = function() {
  console.log('Node');
};

const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
