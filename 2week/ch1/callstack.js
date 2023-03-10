// 
function first() { 
  second(); // 2 번 
  console.log('첫 번째'); // 6 번
}
function second() {
  third(); // 3 번
  console.log('두 번째'); // 5 번
}
function third() { 
  console.log('세 번째'); // 4 번
}
first(); // 1 번
