/**
 * 手写 new 函数
 * @param {function} fn 构造函数
 * @param  {...any} args 其他参数
 */

function _new(fn, ...args){
    const obj = {}; // 创建一个对象
    Reflect.setPrototypeOf(obj, fn.prototype); // 修改对象的原型

    // ------ 上面两行也可以用 Object.create(fn.prototype) 替代 --------

    const res = fn.apply(obj, args); // 执行 fn 构造函数
    return typeof res === 'object' ? res : obj; // 如果构造函数有返回对象，则返回 res，如果没有，返回 obj
}

// test

function Person(name, age){
    this.name = name;
    this.age = age;
}

const p1 = new Person('dou', 24);
const p2 = _new(Person, 'chen', 25);

console.log(p1); // Person { name: 'dou', age: 24 }

console.log(p2); // Person { name: 'chen', age: 25 }