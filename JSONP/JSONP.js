// 手写异步 jsonp
function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        // 组织数据
        params = { ...params, callback };
        let paramsArr = [];
        for (let key in params) {
            paramsArr.push(`${key}=${params[key]}`);
        }

        // 动态创建 script 脚本
        let src = url + '?' + paramsArr.join('&');
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);

        // 注册全局属性，后端返回会触发该属性的方法
        window[callback] = function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
    })
}

// Test
jsonp({
    url: 'http://localhost:3000/test',
    params: { name: 'dou', age: 24 },
    callback: 'jsonpTest'
}).then(res => {
    // ... 其他处理逻辑
})

