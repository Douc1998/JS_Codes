// 手写实现数组的 reduce 方法
/**
 * 思路：
 * 1、确定参数：fn，initialValue
 * 2、确定返回：fn 计算的值，
 * 3、处理逻辑：循环计算，把每次 fn 计算的值提取出来作为它下一次循环的输入
 */

Array.prototype.myReduce = function(fn, initialValue){
    const arr = this;
    let prev = initialValue; // 初始值
    for(let i = 0; i < arr.length; i++){
        prev = fn.call(null, prev, arr[i], i, arr);
    }
    return prev;
}

// Test
const arr = [[1, 2], [3, 4], [5, 6]];
let prev = arr.myReduce((prev, cur) => prev.concat(cur), []);
console.log(prev); // [ 1, 2, 3, 4, 5, 6 ]