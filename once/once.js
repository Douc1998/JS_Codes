// once 函数：传入一个函数作为参数，并返回一个新的函数
// 新的函数只会在第一次调用时执行传入的函数，并将结果保存下来，之后再次调用这个新函数，将直接返回之前保存的结果，而不会再次调用传入的函数。
// 实现方法：高阶函数 + 闭包
function once(fn){
    let used = false;
    let result;
    return function(...args){
        if(!used){
            result = fn.call(this, ...args);
            used = true;
        }
        return result;
    }
}

// Test
const sayName = (name) => {
    console.log(`my name is ${name}`);
    return name;
}

let myOnceFunc = once(sayName);
let result1 = myOnceFunc('jack'); // my name is jack
let result2 = myOnceFunc('john'); // 无输出
console.log(result1); // jack
console.log(result2); // jack