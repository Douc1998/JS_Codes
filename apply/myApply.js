// 手写 apply 方法；
Function.prototype.myApply = function (thisArg, args){
    let self = (typeof thisArg === 'object') ? thisArg : window;
    // 确保 key 的唯一性
    const key = Symbol();
    // this 即为调用的函数
    self[key] = this;
    // 以 self 调用函数，函数的 this 指向 self
    let res = self[key](...args);
    // 删除
    delete self[key];
    return res;
}

// Test
function say(value){
    console.log(this.name, this.age, value);
}

let obj = {
    name: 'dou',
    age: 24
}

var name = 'chen', age = 25;

// 以 obj 为 thisArg
say.myApply(obj, [100]); // dou, 24, 100