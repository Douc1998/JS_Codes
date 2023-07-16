/**
 * 原题：字节跳动青训营笔试题
 * 
 * 要求：解析 URL 的查询参数
 * 1、对 ？、#、& 进行有效地转义
 * 2、查询内容如果是数值应当转为数值
 * 3、查询内容如果是空字符串应当忽略
 * 4、查询内容如果是null、undefined 应当转为对应的值
 * 5、查询内容如果是如果是 bool 值，应当转为 bool 值
 * 6、如果遇到重复的查询参数，应当转为数组
 * 7、返回一个对象，对象 key 为查询的字段，value 为字段值。
 * 
 * @param {String} url 
 * @returns 
 */
function solution(url) {
    const params = {};

    // 核心：通过 web API 自带的 URL 和 URLSearchParams 方法实现
    const u = new URL(url);
    // 返回的是一个 URLSearchParams 对象
    const s = new URLSearchParams(u.search);

    // console.log(s);

    s.forEach((value, key) => {
        if (value === 'null') { // 判断 null
            value = null;
        } else if (value === 'undefined') { // 判断 undefined
            value = undefined;
        } else if (value === 'true') { // 判断 true
            value = true;
        } else if (value === 'false') { // 判断 false
            value = false;
        } else if (value === '') { // 判断空值
            return;
        } else if (!Number.isNaN(Number(value))) { // 判断是否是 number
            value = Number(value);
        } else {
            value = value;
        }

        // 判断是否重复
        if (key in params) {
            if (Array.isArray(params[key])) {
                params[key] = [...params[key], value];
            } else {
                params[key] = [params[key], value];
            }
        } else {
            params[key] = value;
        }
    })

    return params;
}

let myUrl = 'https://jobs.bytedance.com/campus/position?keywords=0&keywords=1&category=&location=ABCDE&project=12345&type=&job_hot_flag=&current=1&limit=10&limit=11'
console.log(solution(myUrl));
// 输出结果：
// { keywords: [ 0, 1 ],
//     location: 'ABCDE',
//     project: 12345,
//     current: 1,
//     limit: [ 10, 11 ] }