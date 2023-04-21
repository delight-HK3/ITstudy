// Promise 방법
const flag = true;
const promise = new Promise(((resolve, reject) => {
        if (flag) {
            resolve('resolve가 되었음')
        }
        else {
            reject('reject가 되었음')
        }
    }))

    promise.then((resolveMessage) => {
        console.log(resolveMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })

// async / await 방법
    async function getApple() {
        return ''
    }

    async function getBanana() {
        await delay(1000)
        return ''
    }

    getApple().then(console.log)
    getBanana().then(console.log)