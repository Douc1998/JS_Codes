// 手写函数柯里化
function curry(fn, ...params){
    // 函数.length 属性返回函数的参数个数
    let length = fn.length;
    // 已输入参数，如果没有就为 []
    params = params || [];
    return function(...args){
        // 把后面调用的参数加入其中
        let newArgs = [...params, ...args];
        // 如果参数没凑齐，继续返回函数(递归），直到满足时，调用 fn 方法
        if(newArgs.length < length){
            return curry.call(this, fn, ...newArgs);
        }else{
            fn.call(this, ...newArgs)
        }
    }
}


// test
function sum(a, b, c, d){
    console.log(a + b + c + d);
}

let fn1 = curry(sum);
fn1(1)(2)(3)(4); // 10
fn1(1, 2)(3)(4); // 10
fn1(1, 2)(3, 4); // 10
fn1(1, 2, 3)(4); // 10


let fn2 = curry(sum, 1);
fn2(2)(3)(4); // 10
fn2(2, 3)(4); // 10
fn2(2)(3, 4); // 10