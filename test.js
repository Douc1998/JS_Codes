// 使用 XMLHttpRequest 和 Promise 实现 ajax

function ajax(type, url, data){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
                resolve(xhr.responseText);
            }else{
                reject(new Error(xhr.responseText));
            }
        }

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
let p = ajax('http://www.liulongbin.top:3006/api/getbooks', 'GET');
p.then((response) => {
    console.log(response.text())
})