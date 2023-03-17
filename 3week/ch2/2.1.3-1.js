var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 5] = 'Fantastic';
oldObject[es + 22] = 'Fantastic add';

oldObject.sayNode(); // Node
oldObject.sayJS(); // JS

console.log(oldObject.ES5); // Fantastic
console.log(oldObject.ES22); // Fantastic add