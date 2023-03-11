// 使用 XMLHttpRequest 和 Promise 实现 ajax
function ajax(type, url, data){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // XHR 2.0 直接 on + 状态就是对应的函数。XHR 1.0 使用 onreadystatechange 判断 xhr.readyState === 4
        xhr.onload = function(){
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
                resolve(xhr.responseText);
            }else{
                reject(new Error(xhr.responseText));
            }
        }

        // 判断 GET 还是 POST
        if(type.toUpperCase() === 'GET'){
            xhr.open('GET', url, true);
            xhr.send();
        }

        if (type.toUpperCase() === 'POST') {
            xhr.open('POST', url, true);
            // POST 请求设置响应头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=urf-8');
            xhr.send(data);
          }
    })
}

// Test 
let p = ajax('GET', './myData/users.json');
p.then((response) => {
    console.log(response);
})