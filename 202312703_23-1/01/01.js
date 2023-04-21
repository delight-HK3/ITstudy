const answer = '하위 쓰레드는 요청을 받고 연산이 끝날 때까지 응답을 안하다가 연산이 완료되면 그 때 응답합니다.\n'+
                'node js에서 멀티스레드를 사용하기 위해서는 일단 node js 버전이 14버전 이어야 합니다.\n' + 
                '그리고 worker_threads 모듈을 도입해야 멀티 스레드를 사용 할 수 있습니다'

/* 예시코드
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) { // 메인 스레드
	const worker = new Worker(__filename); // 같은 dir폴더에 워커를 생성
    
} else { // 워커스레드
	// 위에서 생성한 worker는 여기서 동작
}
*/

console.log(answer);
