const EventEmitter = require('events'); // 1.
const myEmitter = new EventEmitter(); // 2.

// 3.
const myEventHandler = () => { 
  console.log('Event occurred!');
};

myEmitter.on('myEvent', myEventHandler); // 4.
myEmitter.emit('myEvent'); // 5.

const answer = "1. events 모듈을 로드합니다.\n" +
                "2. 이벤트를 처리할 새로운 이벤트 객체를 생성합니다.\n" +
                "3. 이벤트 리스너 함수를 정의합니다. 이 함수는 이벤트가 발생했을 때 실행됩니다.\n" +
                "4. 이벤트 리스너를 등록합니다. 이벤트가 발생했을 때 실행될 함수를 지정합니다.\n" +
                "5. 이벤트를 발생시킵니다. 등록된 이벤트 리스너 함수가 실행됩니다.\n"
console.log(answer);