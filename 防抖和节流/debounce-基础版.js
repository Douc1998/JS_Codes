/**
 * 防抖函数 debounce-基础版
 * @param {fn} fn 外部传入的函数
 * @param {number} delay 延迟的时间
 * @return {function} 返回执行函数
 */
function debounce(fn, delay = 1000) {
    // 判断数据类型
    if (typeof fn !== 'function') {
        throw 'The first parameter must be a function !'
    }
    if (typeof delay !== 'number') {
        throw 'The second parameter must be a number !'
    }

    // 防抖实现
    let timer = null;
    return function () { // 借助闭包实现
        const context = this; // 保存 this 指向， 作用域
        const args = arguments; // 保存参数
        if (timer) { // 如果多次调用，则会清除上一次计时器
            clearTimeout(timer);
        };
        timer = setTimeout(() => { // setTimeout 函数执行完毕会自动销毁，timer 将为 null
            fn.apply(context, args);
        }, delay);
    }
}