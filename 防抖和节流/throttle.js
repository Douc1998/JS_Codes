/**
 * 节流函数 throttle
 * @param {fn} fn 外部传入的函数
 * @param {number} interval 规定的时间
 * @return {function} 返回执行函数
 */
function throttle(fn, interval = 1000){
    // 判断数据类型
    if(typeof fn !== 'function'){
        throw 'The first parameter must be a function !'
    }
    if(typeof interval !== 'number'){
        throw 'The second parameter must be a number !'  
    }
    // 节流实现，借助计时器（也可以利用 new Date().getTime() 来计算时间间隔是否满足 interval 来实现）
    let timer = null;
    return function(){ // 借助闭包实现
        const context = this; // 保存作用域
        const args = arguments; // 保存参数
        if(!timer){ // timer 也起到是否执行的标志，如果为 null 表示执行完毕可以再次执行，反之表示还没达到规定时间
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, interval)
        }
    }
}