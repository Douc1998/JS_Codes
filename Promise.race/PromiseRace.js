// 手写 Promise.race
const PromiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((element) => {
            // 防止不是 Promise 对象，利用 Promise.race 包装
            Promise.resolve(p).then((value) => resolve(value)).catch((e) => reject(e));
        })
    })
}


// 测试


let p1 = PromiseRace([
    Promise.resolve('first'),
    Promise.resolve('second'),
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000); // 1000ms 延迟后会变为解决
    })
]);

setTimeout(console.log, 0, p1); // 

let p2 = PromiseRace([
    Promise.reject('first'),
    Promise.resolve('second'),
    Promise.reject('third')
]);

setTimeout(console.log, 0, p2); // 