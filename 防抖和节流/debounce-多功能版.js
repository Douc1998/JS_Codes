/**
 * 防抖函数-多功能版，除了基础的防抖功能以后还有：
 * 1、实现立即执行：第一次及每次等待完 delay 时间后，再次触发时可以立即执行一次回调函数
 * 2、取消防抖功能：如果正在等待 delay 时间时，可以使用 cancel 方法取消回调
 * @param {fn} fn 外部传入的函数
 * @param {number} delay 延迟的时间
 * @return {function} 返回执行函数
 */

function debounce(fn, delay, immediate = false) {
    // 判断数据类型
    if (typeof fn !== 'function') {
        throw 'The first parameter must be a function !'
    }
    if (typeof delay !== 'number') {
        throw 'The second parameter must be a number !'
    }

    // 定义一个计时器，也可以保存上一次的计时器
    let timer = null;
    // 标记立即执行是否已经被执行过了
    let isInvoke = false;

    // 借助闭包实现
    let debounce_ = function () {
        const content = this; // 保存作用域
        const args = arguments; // 保存函数参数
        // 取消上一次的定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 判断是否需要立即执行
        if (immediate && !isInvoke) {
            // 立即执行回调函数
            fn.apply(content, args);
            isInvoke = true; // 表示已经立即执行过了
        } else {
            // 延迟执行
            timer = setTimeout(() => {
                // 执行回调函数
                fn.apply(content, args);
                isInvoke = false; // 等待完了一次 delay 后，下一次再触发时，又可以立即执行一次。
            }, delay)
        }
    }

    // 取消防抖功能：
    debounce_.cancel = function(){
        // 清除现有计时器, 并将计时器初始化为null;
        clearInterval(timer);
        timer = null;
    }

    return debounce_;
}