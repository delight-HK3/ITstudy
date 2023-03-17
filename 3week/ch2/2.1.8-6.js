async function findAndSaveUser(Users) {
  // 생략
}

findAndSaveUser().then(() => { /* 생략 */ });
// 또는
async function other() {
  const result = await findAndSaveUser();
}

const arr = [5,1,2,3,4,1,5,2,6];

const s = new Set(arr);
const result = Array.from(s);
// 중복은 삭제가 되지만 정렬까지는 안된다.
console.log(result);
