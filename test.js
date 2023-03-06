// 手写 Promise.all
const PromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const len = promises.length;
        if(len === 0) return resolve([]); // 如果空数组，直接返回
        const res = new Array(len); // 初始化结果数组
        let count = 0; // 记录返回结果的个数
        promises.forEach((element, index) => {
            // 以防数组里不全是 Promise 对象，使用 Promise.resolve 包装一下
            Promise.resolve(element).then((value) => {
                count += 1;
                res[index] = value;
                // 如果所有 promise 都完成了，则返回结果
                if(count === len){
                    resolve(res);
                }
            }).catch((e) => reject(e));
        });
    })
}

let p1 = PromiseAll([
    Promise.resolve('first'),
    Promise.resolve('second'),
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000); // 1000ms 延迟后会变为解决
    })
]);

setTimeout(console.log, 0, p1); // (0ms 延迟) => Promise {<pending>}
setTimeout(console.log, 2000, p1); // (2000ms 延迟) => Promise {<fulfilled>: Array(3)}

let p2 = PromiseAll([
    Promise.reject('first'),
    Promise.resolve('second'),
    Promise.reject('third')
]);

// 不管有多少个拒绝，第一个状态变为拒绝的期约的拒绝理由将会是 Promise.all 的拒绝理由。
setTimeout(console.log, 0, p2); // Promise {<rejected>: 'first'}