// 手写 Object.Create 方法
function my_objCreate(proto, newProperties){
    // 数据类型判断
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError(`Object prototype is a required parameter,and it only be \'Object\' or \'null\'`)
    };
    if((newProperties === null)){
        throw new TypeError('Cannot convert null to object properties')
    };

    // 构造函数
    function F(){};
    // 将 proto 设置为 F的原型对象
    F.prototype = proto;
    // 创建以proto为原型对象的实例
    const f = new F();
    // 如果第二个参数存在，则利用 Object.defineProperties 定义
    if(newProperties !== undefined){
        Object.defineProperties(f, newProperties)
    }
    // 返回实例
    return f;
}

// --------------- 测试 ----------------

let person = {
    name: 'dou',
    age: 24
}

const student = my_objCreate(person, {
    job: {
        enumerable: true,
        value: 'student'
    },
    gender: {
        enumerable: true,
        value: 'boy'
    }
})

console.log(student); // { job: 'student', gender: 'boy' } 这里不会显示原型的属性，而是实例对象自身可枚举的属性
console.log(student.name); // dou
console.log(student.age); // 24
