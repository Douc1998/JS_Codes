// 手写 bind 方法：
Function.prototype.myBind = function(obj){
    let self = (typeof obj === 'object') ? obj : window;
    let fn = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let newFn = function(...innerArgs){
        if(this instanceof newFn){ // 如果返回的函数用作构造函数，即返回的函数的prototype会出现在当前实例（this）的原型链上
            return new fn(...args); // 直接利用 new 调用原始函数
        }else{ // 如果不当作构造函数，执行函数的 this 应该指向 obj
            return fn.call(self, ...args, ...innerArgs);
        }
    }
    return newFn;
}

// Test
function say(job){
    console.log(this.name, this.age, job);
}

let obj = {
    name: 'dou',
    age: 24
}


let fn = say.myBind(obj, 'student');
// 直接调用， this 是 obj
fn(); // dou, 24, student

// 当作构造函数调用，this 是实例自身
let newObj = new fn(); // undefined, undefined, student
console.log(newObj.__proto__); // say(job){}