function retry(request, maxRetryNums){
    // 计数器，用于标记是否达到最大重试次数
    let count = 0;
    // retry 返回的应该是 promise 对象
    return new Promise((resolve, reject) => {
        // 定义一个重试的函数
        function continueTry(){
            request().then(val => {
                resolve(val);
            }).catch(err => {
                if(count >= maxRetryNums){
                    reject(err);
                }else{
                    // 重试
                    count++;
                    console.log(`第 ${count} 次 retry`)
                    continueTry();
                }
            })
        }

        // 执行重试方法
        continueTry();
    })
}

// test
let request = function(){
    return fetch('https://baidu.com/');
}
retry(request, 5).then(val => {
    console.log('请求成功：', val);
}).catch(err => {
    console.log('请求失败：', err)
});