// 输出嵌套对象某种属性值
// 例如示例 myObj，输出所有 name 属性对应的值，其他属性的值不用输出
let myObj = {
    name: 'China',
    city: [{
        name: 'beijing',
        district: [{ name: 'chaoyang' }, { name: 'haidian' }, { name: 'daxing' }]
    }, {
        name: 'shanghai',
        district: [{ name: 'huangpu' }, { name: 'minhang' }, { name: 'xuhui' }, { name: 'jingan' }, { name: 'yangpu' }]
    }, {
        name: 'shenzhen',
        district: [{ name: 'futian' }, { name: 'nanshan' }, { name: 'baoshan' }, { name: 'longhua' }]
    }, {
        name: 'guangzhou',
        district: [{ name: 'tianhe' }, { name: 'baiyun' }]
    }
    ],
    chairman: {
        name: 'xi',
        age: 60
    }
}

// 获取某个嵌套对象所有的 property 属性的值
function getTargetValue(obj, property) {
    let res = [];
    for (let key in obj) {
        if (key === property) { // 判断 obj 中有没有 property 属性，有则直接加入
            res.push(obj[key]);
        }
        if (typeof obj[key] === 'object') { // 如果当前属性不是基础值，则继续深度遍历
            res = res.concat(getTargetValue(obj[key], property));
        }
    }
    return res;
}

// Test
console.log(getTargetValue(myObj, 'name'));
// [ 'China', 'beijing', 'chaoyang', 'haidian', 'daxing', 'shanghai', 'huangpu', 'minhang', 'xuhui', 'jingan', 'yangpu', 'shenzhen', 'futian', 'nanshan', 'baoshan', 'longhua', 'guangzhou', 'tianhe', 'baiyun', 'xi' ]