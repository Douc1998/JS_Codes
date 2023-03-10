// 手写 call 方法：
Function.prototype.myCall = function(thisArg, args){
    // 判断传入的参数
    let self = (typeof thisArg) ? thisArg : window;
    // 确保 key 的唯一性
    const key = Symbol();
    // this 即为调用的函数
    self[key] = this;
    // 以 self 调用函数，函数的 this 指向 self
    let res = self[key](args);
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
say.myCall(obj, 100); // dou, 24, 100