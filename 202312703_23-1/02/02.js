const answer = '함수가 호출될 때 함수로 값을 전달해주는 값 입니다. \n'+
                '콜백지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제입니다. \n' +
                '콜백지옥을 해결하기 위해서는 Promise 나 Async를 사용하는 방법이 있습니다. \n'
console.log(answer);

// promise 예시 
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1), 1000);
    //1초 있다가 숫자 1을 전달
  });
  
fetchNumber
    .then(num => num*2) // 2  num에 숫자 1 전달됨 (성공), 이후 숫자를 2배
    .then(num => num*3) // 6
    .then(num => { // 5
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>resolve(num-1), 1000);
    });
    })
    .then(num => console.log(num)); // 5  총 2초 걸림
